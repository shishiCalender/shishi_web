import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ArtboardCopy } from "./screens/ArtboardCopy";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ArtboardCopy />
  </StrictMode>,
);
