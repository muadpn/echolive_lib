import { Channel, Socket } from "phoenix";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  ReactNode,
  useState,
  MutableRefObject,
} from "react";

type VisitorTrackerContextType = {
  socket: MutableRefObject<Socket | null>;
  channel: MutableRefObject<Channel | null>;
  visitorCount: number;
  error: string | null;
};

const VisitorTrackerContext = createContext<VisitorTrackerContextType>({
  socket: { current: null },
  channel: { current: null },
  visitorCount: 0,
  error: null,
});

type PresenceState = {
  count: number;
};

type PresenceDiff = {
  count_change: number;
};

export const VisitorTrackerProvider = ({
  children,
  websocketUrl,
  domain,
  user_id,
}: {
  children: ReactNode;
  websocketUrl: string;
  domain: string;
  user_id: string;
}) => {
  const socketRef = useRef<Socket | null>(null);
  const channelRef = useRef<Channel | null>(null);
  const [visitorCount, setVisitorCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);

    // Generate a unique user ID for this session

    // Initialize socket with user_id in params
    const socket = new Socket(websocketUrl, {
      params: { user_id },
    });

    socket.onOpen(() => console.log("Socket connected"));
    socket.onError(() => setError("Socket connection error"));

    socket.connect();
    socketRef.current = socket;

    // Join the channel specific to this domain
    const channel = socket.channel(`website:${domain}`);
    channelRef.current = channel;

    channel
      .join()
      .receive("ok", () => {
        console.log(`Successfully joined tracking for ${domain}`);
        setError(null);
      })
      .receive("error", (resp) => {
        const errorMsg = `Failed to join tracking: ${JSON.stringify(resp)}`;
        console.error(errorMsg);
        setError(errorMsg);
      });

    // Handle initial state
    channel.on("presence_state", (state: PresenceState) => {
      setVisitorCount(state.count);
    });

    // Handle incremental updates
    channel.on("presence_diff", (diff: PresenceDiff) => {
      console.log(diff.count_change);
      setVisitorCount((currentCount) =>
        Math.max(0, currentCount + diff.count_change)
      );
    });

    return () => {
      if (channelRef?.current) channelRef.current.leave();
      if (socketRef?.current) socketRef.current.disconnect();
    };
  }, [websocketUrl, domain]);

  return (
    <VisitorTrackerContext.Provider
      value={{
        socket: socketRef,
        channel: channelRef,
        visitorCount,
        error,
      }}
    >
      {children}
    </VisitorTrackerContext.Provider>
  );
};

export const useVisitorTracker = () => {
  return useContext(VisitorTrackerContext);
};
