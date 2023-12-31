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
  const [entity, setEntity] = useState<string>("");
  // useQuery({});
  useEffect(() => {
    setRoute(path);
    setEntity("entity");
  }, [path]);
  return (
    <div style={{ backgroundColor: "gray" }}>
      <p>{adjective}</p>
      <p className={`${entity === "entity" ? "red" : "cream"}`}>{color}</p>
      <p className={classes}>{classes}</p>
      <p className={`${route === "/" ? "red" : "cream"}`}>{route}</p>
    </div>
  );
});
