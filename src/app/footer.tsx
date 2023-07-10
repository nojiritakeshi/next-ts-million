"use client";
import { block } from "million/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export const Footer = () => {
  const path = usePathname();
  const [route, setRoute] = useState<string>("");

  useEffect(() => {
    setRoute(path);
  }, [path]);
  return (
    // styleに三項演算子
    <footer
      style={
        route === "/"
          ? { backgroundColor: "red" }
          : { backgroundColor: "cream" }
      }
      className={route === "/" ? "red" : "cream"}
    >
      .....
    </footer>
  );
};
