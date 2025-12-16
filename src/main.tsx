import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-rtl/dist/css/bootstrap-rtl.min.css";
import "./index.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider dir="rtl">
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
