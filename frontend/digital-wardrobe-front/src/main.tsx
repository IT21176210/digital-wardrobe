import "@radix-ui/themes/styles.css";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { Theme } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Theme>
    <App />
  </Theme>
);
