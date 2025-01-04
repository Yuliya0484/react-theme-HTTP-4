import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./components/users/user.jsx";
import "./index.css";
import "modern-normalize";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

//"css.lint.unknownProperties": "ignore",
