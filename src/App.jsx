import React from "react";
import { Route, Routes } from "react-router-dom";
import EditPost from "./pages/editPost";
import Home from "./pages/home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<EditPost />} />
    </Routes>
  );
};

export default App;
