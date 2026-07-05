"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

type Props = {
  src: string | null;
  alt: string;
  onClose: () => void;
};

export default function CertificateLightbox({ src, alt, onClose }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!src) return;

    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [src, onClose]);

  if (!mounted || !src) return null;

  return createPortal(
    <div className="modal-overlay">
      <button
        type="button"
        className="modal-overlay-backdrop"
        aria-label="Cerrar"
        onClick={onClose}
      />
      <figure
        className="cert-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label={alt}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="cert-lightbox-img" />
        <button
          type="button"
          className="modal-close"
          aria-label="Cerrar"
          onClick={onClose}
        >
          <X className="h-[18px] w-[18px]" />
        </button>
      </figure>
    </div>,
    document.body
  );
}
