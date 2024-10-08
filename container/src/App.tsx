import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
const MarketingApp = lazy(() => import("marketing/MarketingApp"));
const AuthApp = lazy(() => import("auth/AuthApp"));
import "./index.css";

const App: React.FC = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <MarketingApp />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <AuthApp />
      </Suspense>
    </div>
  </BrowserRouter>
);
const rootElement = document.getElementById("app");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
