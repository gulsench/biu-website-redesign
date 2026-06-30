import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Modules from "./pages/Modules";
import NotFound from "./pages/NotFound";
import "./global.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/modules" element={<Modules />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);
