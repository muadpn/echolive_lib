import { Hello } from "./ui/hello";

export default function App() {
  let DOMAIN = [
    "ws://localhost:4000/ws",
    "ws://core.globexhost.com/ws",
    "wss://core.globexhost.com/ws",
  ];
  return (
    <div className="bg-black h-screen px-2">
      hello from app
      <div className="text-2xl">
        <Hello domain="app-one" websocketUrl={DOMAIN[2]} />
      </div>
    </div>
  );
}
