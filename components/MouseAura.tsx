"use client";
import { useMouseAura } from "@/hooks/useMouseAura";

export function MouseAura() {
  const auraRef = useMouseAura();
  return <div ref={auraRef} className="mouse-aura" />;
}
