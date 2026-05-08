import { useEffect, useState } from "react";

const useActiveSection = (ids: string[]): string => {
  const [active, setActive] = useState<string>(ids[0] || "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-30% 0px -45% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...ids]);

  return active;
};

export default useActiveSection;
