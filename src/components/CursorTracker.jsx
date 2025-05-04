import React, { useEffect, useState } from "react";

const CursorTracker = () => {
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1040);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setDotPos({ x: clientX, y: clientY });

      // Use animation frame for smoother outer ring transition
      requestAnimationFrame(() => {
        setRingPos({ x: clientX, y: clientY });
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDesktop]);

  if (!isDesktop || !isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]">
      {/* Instant Dot */}
      <div
        className="w-2 h-2 bg-orange-600 rounded-full fixed z-[9999]"
        style={{
          transform: `translate3d(${dotPos.x -4}px, ${dotPos.y - 4}px, 0)`,
        }}
      />

      {/* Smooth Outer Ring */}
      <div
        className="w-10 h-10 border-2 border-orange-600 rounded-full fixed z-[9998] transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${ringPos.x - 20}px, ${ringPos.y - 20}px, 0)`,
        }}
      />
    </div>
  );
};

export default CursorTracker;
