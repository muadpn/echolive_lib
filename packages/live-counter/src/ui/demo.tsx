import { useVisitorTracker } from "@/provider/live-tracker";

export default function Demo() {
  const { visitorCount } = useVisitorTracker();
  return <div>{visitorCount}</div>;
}
