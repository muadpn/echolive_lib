import { useVisitorTracker } from "@/provider/live-tracker";
import React from "react";

export default function Demo() {
  const { visitorCount } = useVisitorTracker();
  return <div>{visitorCount}</div>;
}
