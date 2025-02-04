import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { version } from "../package.json";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    {/* <Toaster gutter={30} /> */}
    <div className={`fixed bottom-0 right-0 text-[9px]`}>v{version}</div>
  </StrictMode>
);
