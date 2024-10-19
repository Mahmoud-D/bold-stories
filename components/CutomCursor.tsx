"use client";
import { motion, useMotionValue, useSpring, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  // Use `useMotionValue` for smoother values.
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Optional: Apply spring effect to smooth out the animation even further.
  const springX = useSpring(cursorX, { stiffness: 100, damping: 20 });
  const springY = useSpring(cursorY, { stiffness: 100, damping: 20 });

  // Animation controls to switch between hover and default state.
  const controls = useAnimation();

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Attach the mousemove listener.
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    controls.start({
      scale: 1.5,
      backgroundColor: "#f00", // Example red color.
      opacity: 0.5,
      //   borderColor: "#f00",
      //   border: "none",
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    controls.start({
      scale: 1,
      backgroundColor: "transparent",
      border: "2px solid #F43333",
    });
  };

  useEffect(() => {
    const handleHoverEnter = () => handleMouseEnter();
    const handleHoverLeave = () => handleMouseLeave();

    window.addEventListener("card-hover-enter", handleHoverEnter);
    window.addEventListener("card-hover-leave", handleHoverLeave);

    return () => {
      window.removeEventListener("card-hover-enter", handleHoverEnter);
      window.removeEventListener("card-hover-leave", handleHoverLeave);
    };
  }, []);

  return (
    <motion.div
      style={{
        translateX: springX, // Use the spring value for X.
        translateY: springY, // Use the spring value for Y.
        // position: "fixed", // Use `fixed` to avoid scrolling issues.
        // top: 0,
        // left: 0,
      }}
      animate={controls} // Use the animation controls for dynamic changes.
      className="fixed top-0 left-0 z-30  pointer-events-none   w-10 h-10 rounded-full"
    />
  );
};

export default CustomCursor;
