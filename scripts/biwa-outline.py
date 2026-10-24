# OpenStreetMap の琵琶湖の湖岸線から、scripts/icon.html に埋め込む輪郭（SVG の path）を作る。
# 地図データ © OpenStreetMap contributors（ODbL）。使うときはサイトに出典を書く（フッターに記載済み）。
#
# 1. 湖岸線を取る（Nominatim。1回だけ・連絡先入りの User-Agent で）:
#    curl -s -A "shosei-ueda.com (shosei@shosei-ueda.com)" "https://nominatim.openstreetmap.org/search?q=%E7%90%B5%E7%90%B6%E6%B9%96&format=json&limit=3&polygon_geojson=1&polygon_threshold=0.002" -o biwa.json
# 2. python -I scripts/biwa-outline.py biwa.json biwa_path.json
# 3. biwa_path.json の fine / coarse を scripts/icon.html の LAKE に貼る

import json, sys, math
src, dst = sys.argv[1], sys.argv[2]
d = json.load(open(src, encoding="utf-8"))
rings = d[0]["geojson"]["coordinates"]
outer = rings[0]
lat0, lat1 = min(p[1] for p in outer), max(p[1] for p in outer)
lon0, lon1 = min(p[0] for p in outer), max(p[0] for p in outer)
H = 54.0
k = H / (lat1 - lat0)
kx = k * math.cos(math.radians((lat0 + lat1) / 2))
w = (lon1 - lon0) * kx
ox, oy = (64 - w) / 2, (64 - H) / 2
P = lambda p: (ox + (p[0] - lon0) * kx, oy + (lat1 - p[1]) * k)
pts = [P(p) for p in outer]
if pts[0] == pts[-1]:
    pts = pts[:-1]

def dp(pts, eps):
    if len(pts) < 3:
        return pts
    (x1, y1), (x2, y2) = pts[0], pts[-1]
    L = math.hypot(x2 - x1, y2 - y1) or 1e-9
    dmax, idx = 0, 0
    for i in range(1, len(pts) - 1):
        x0, y0 = pts[i]
        dd = abs((y2 - y1) * x0 - (x2 - x1) * y0 + x2 * y1 - y2 * x1) / L
        if dd > dmax:
            dmax, idx = dd, i
    if dmax > eps:
        return dp(pts[: idx + 1], eps)[:-1] + dp(pts[idx:], eps)
    return [pts[0], pts[-1]]

n = min(range(len(pts)), key=lambda i: pts[i][1])
s = max(range(len(pts)), key=lambda i: pts[i][1])
a, b = sorted((n, s))
h1, h2 = pts[a : b + 1], pts[b:] + pts[: a + 1]

def smooth(q, t=0.5):
    m = len(q)
    out = "M%.2f %.2f" % q[0]
    for i in range(m):
        p0, p1, p2, p3 = q[i - 1], q[i], q[(i + 1) % m], q[(i + 2) % m]
        c1 = (p1[0] + (p2[0] - p0[0]) * t / 3, p1[1] + (p2[1] - p0[1]) * t / 3)
        c2 = (p2[0] - (p3[0] - p1[0]) * t / 3, p2[1] - (p3[1] - p1[1]) * t / 3)
        out += " C%.2f %.2f %.2f %.2f %.2f %.2f" % (c1 + c2 + p2)
    return out + " Z"

res = {}
for name, eps in (("fine", 0.7), ("coarse", 1.3)):
    q = dp(h1, eps)[:-1] + dp(h2, eps)[:-1]
    res[name] = smooth(q)
    print(name, len(q), "points")
isl = [r for r in rings[1:] if abs(sum(p[0] for p in r) / len(r) - 136.143) < 0.01 and abs(sum(p[1] for p in r) / len(r) - 35.422) < 0.01][0]
res["island"] = P((sum(p[0] for p in isl) / len(isl), sum(p[1] for p in isl) / len(isl)))
print("width %.1f, island %.1f %.1f" % (w, *res["island"]))
json.dump(res, open(dst, "w", encoding="utf-8"))
