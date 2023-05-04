import React from "react";
import { Route, Routes } from "react-router-dom";
import Watches from "../Pages/Watches";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/watches" element={<Watches />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
