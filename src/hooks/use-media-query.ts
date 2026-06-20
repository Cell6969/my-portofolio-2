"use client";

import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const updateMatches = (e: MediaQueryListEvent | MediaQueryList): void => {
      setMatches(e.matches);
    };

    updateMatches(media);
    media.addEventListener("change", updateMatches);

    return () => {
      media.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return matches;
}
