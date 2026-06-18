import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

export default function PageTopReset() {
  const { pathname, search, hash } = useLocation();

  useLayoutEffect(() => {
    // If the URL has an anchor/hash, let the browser jump to that section.
    if (hash) return;

    const html = document.documentElement;
    const body = document.body;
    const previousScrollBehavior = html.style.scrollBehavior;

    // Force instant position reset, even if global CSS uses smooth scrolling.
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.scrollTop = 0;
    body.scrollTop = 0;

    html.style.scrollBehavior = previousScrollBehavior;
  }, [pathname, search, hash]);

  return null;
}