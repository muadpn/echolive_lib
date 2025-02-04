import { VisitorTrackerProvider } from "@/provider/live-tracker";
import Demo from "./demo";

export function Hello({
  domain,
  websocketUrl,
}: {
  websocketUrl: string;
  domain: string;
}) {
  return (
    <VisitorTrackerProvider
      user_id={`user_${Math.random().toString(36).slice(2, 9)}`}
      domain={domain}
      websocketUrl={websocketUrl}
    >
      <div className="text-2xl font-medium">This IS UI HELLO</div>
      <Demo />
    </VisitorTrackerProvider>
  );
}
