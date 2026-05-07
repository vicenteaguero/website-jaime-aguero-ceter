import { useEffect } from "react";

let observer = null;

function getObserver() {
  if (observer) return observer;
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return null;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  return observer;
}

export function useFadeIn(rootRef) {
  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const root = rootRef?.current ?? document;
    const obs = getObserver();
    if (!obs) return undefined;
    const els = root.querySelectorAll("[data-anim]");
    els.forEach((el) => obs.observe(el));
    return () => {
      els.forEach((el) => obs.unobserve(el));
    };
  }, [rootRef]);
}
