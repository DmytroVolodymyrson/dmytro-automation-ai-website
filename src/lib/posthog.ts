import posthog from "posthog-js";

let initialized = false;

export function initPostHog() {
  if (typeof window === "undefined") return;
  if (initialized) return;

  const key = import.meta.env.VITE_POSTHOG_KEY;
  const host = import.meta.env.VITE_POSTHOG_HOST;

  if (!key || key === "phc_xxx") return;

  posthog.init(key, {
    api_host: host || "https://us.i.posthog.com",
    capture_pageview: true,
    capture_pageleave: true,
  });

  registerViewport();
  initialized = true;
}

function getViewport(): "mobile" | "tablet" | "desktop" {
  const w = window.innerWidth;
  if (w < 768) return "mobile";
  if (w < 1024) return "tablet";
  return "desktop";
}

function registerViewport() {
  posthog.register({ viewport: getViewport() });
}

export function capture(event: string, properties?: Record<string, unknown>) {
  if (!initialized) return;
  posthog.capture(event, properties);
}
