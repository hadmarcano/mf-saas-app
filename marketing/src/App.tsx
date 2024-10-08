import React from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

import "./index.css";



const MarketingApp = () => {
  return (
    <React.StrictMode>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
    </React.StrictMode>
  );
};


export default MarketingApp;