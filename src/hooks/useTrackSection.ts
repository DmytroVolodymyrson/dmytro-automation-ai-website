import { useEffect, useRef } from "react";
import { capture } from "@/lib/posthog";

const tracked = new Set<string>();

export function useTrackSection(section: string) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || tracked.has(section)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.has(section)) {
          tracked.add(section);
          capture("section_viewed", { section });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [section]);

  return ref;
}
