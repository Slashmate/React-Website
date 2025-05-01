import React, { useEffect, useState } from "react";

const CursorTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]">
        <div
          className="outline-2 outline-amber-800 w-9 h-9 rounded-full transition-transform duration-200 ease-out"
          style={{
            transform: `translate3d(${position.x - 16}px, ${position.y - 15}px, 0)`,
          }}
        >
        </div>
      </div>
    </>
  );
};

export default CursorTracker;
