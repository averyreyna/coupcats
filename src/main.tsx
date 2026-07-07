import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "maplibre-gl/dist/maplibre-gl.css";
import "../styled-system/styles.css";
import "./index.css";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import DisclaimerModal from "./components/DisclaimerModal.tsx";
import NarrativePage from "./pages/NarrativePage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <DisclaimerModal />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/narrative/:id" element={<NarrativePage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
