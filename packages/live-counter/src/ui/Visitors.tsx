import { useVisitorTracker } from "@/provider/live-tracker";

export default function Visitors() {
  const { visitorCount } = useVisitorTracker();
  return (
    <div>
      <div className="text-teal-500">blue</div>
      <div className="bg-black">
        <p className="text-white">black</p>
      </div>
      <div className="bg-green-400">Green</div>
      <p>{visitorCount}</p>
    </div>
  );
}
