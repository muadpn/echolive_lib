import { Hello } from "./ui/hello";

export default function App() {
  return (
    <div>
      hello from app
      <div className="text-2xl">
        <Hello domain="app-one" websocketUrl="ws://192.168.1.42:4000/ws" />
      </div>
    </div>
  );
}
