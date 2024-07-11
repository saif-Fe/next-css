"use client";
import { useEffect, useState } from "react";
import classes from "./ParallaxComponent.module.css";
export default function ParallaxComponent({ children, scrollElement }) {
  const [scrollPos, setScrollPos] = useState({ y: 0 });
  const scrollHandler = () => {
    console.log(window.scrollY);
    setScrollPos({ y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);
  return (
    <div className={classes.parallaxComponent}>
      {children}
      <div
        className={classes.scrollElement}
        style={{ transform: `translateY( ${scrollPos.y * -0.1}px )` }}
      >
        {scrollElement}
      </div>
    </div>
  );
}
