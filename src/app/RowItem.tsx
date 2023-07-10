"use client";
import { block } from "million/react-server";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import { block } from "/Users/take/oss/million/packages/react";
export type RowProps = {
  adjective: string;
  color: string;
  classes: string;
  keyName: string;
};

export const RowBlock = block(({ adjective, color, classes }: RowProps) => {
  const path = usePathname();
  const [route, setRoute] = useState<string>("");
  useQuery({});
  useEffect(() => {
    setRoute(path);
  }, [path]);
  return (
    <div style={{ backgroundColor: "gray" }}>
      <p>{adjective}</p>
      <p>{color}</p>
      <p className={classes}>{classes}</p>
      <p>{route}</p>
    </div>
  );
});
