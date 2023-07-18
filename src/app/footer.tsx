"use client";
import { block } from "million/react";
// import { block } from "../../../million/packages/react";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export const Footer = block(() => {
  const path = usePathname();
  const [route, setRoute] = useState<string>("");
  const menubarsRefs = useRef<SVGElement[]>([]);

  const addToMenubarsRef = (el: SVGElement) => {
    if (el && !menubarsRefs.current.includes(el)) {
      menubarsRefs.current.push(el);
    }
    console.log(menubarsRefs);
  };

  useEffect(() => {
    setRoute(path);
  }, [path]);
  return (
    // styleに三項演算子
    <footer
      style={
        `${route} === "/"`
          ? { backgroundColor: "red" }
          : { backgroundColor: "cream" }
      }
      className={`${route === "/" ? "red" : "cream"}`}
      // className="red"
    >
      <svg
        ref={(el) => addToMenubarsRef(el!)}
        fill="none"
        height="5"
        viewBox="0 0 33 5"
        width="33"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute my-2 -translate-y-[7px] duration-500 ease-in-out"
      />
    </footer>
  );
});
