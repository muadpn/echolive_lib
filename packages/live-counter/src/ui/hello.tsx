import { VisitorTrackerProvider } from "@/provider/live-tracker";
import Visitors from "./Visitors";

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
      <Visitors />
    </VisitorTrackerProvider>
  );
}
