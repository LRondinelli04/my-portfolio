import { useEffect, useState } from "react";

const useActiveSection = (ids: string[]): string => {
  const [active, setActive] = useState<string>(ids[0] || "");

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;

      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 2) {
        setActive(ids[ids.length - 1] || "");
        return;
      }

      const refLine = window.innerHeight * 0.35;
      let current = ids[0] || "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= refLine) current = id;
      }
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [...ids]);

  return active;
};

export default useActiveSection;
