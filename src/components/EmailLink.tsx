"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/content/site";

const subscribe = () => () => {};

// HTML にアドレスを直書きしないことで、メールアドレス収集ボットに拾われにくくする
export function EmailLink({ className, label }: { className?: string; label?: string }) {
  const address = useSyncExternalStore(
    subscribe,
    () => `${site.emailUser}@${site.emailDomain}`,
    () => null,
  );

  if (!address) {
    return (
      <span className={className}>
        {label ?? `${site.emailUser} [at] ${site.emailDomain}`}
      </span>
    );
  }

  return (
    <a href={`mailto:${address}`} className={className}>
      {label ?? address}
    </a>
  );
}
