import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PostHogProvider } from "@posthog/react";
import App from "./App.jsx";

const posthogKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;
const posthogHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostHogProvider apiKey={posthogKey} options={{ api_host: posthogHost }}>
      <App />
    </PostHogProvider>
  </StrictMode>,
);
