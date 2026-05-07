"use client";

import {useEffect, useState} from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {passive: true});

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  return (
    <button
      type="button"
      className={`back-to-top${isVisible ? " is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
