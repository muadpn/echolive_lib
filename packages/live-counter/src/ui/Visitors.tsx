import { useVisitorTracker } from "@/provider/live-tracker";

export default function Visitors() {
  const { visitorCount } = useVisitorTracker();
  return <div>{visitorCount}</div>;
}
