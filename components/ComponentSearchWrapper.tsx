"use client";

import dynamic from "next/dynamic";

const ComponentSearch = dynamic(
  () =>
    import("@/components/ComponentSearch").then((mod) => ({
      default: mod.ComponentSearch,
    })),
  { ssr: false },
);

export function ComponentSearchWrapper() {
  return <ComponentSearch />;
}
