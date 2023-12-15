// import { useState } from "react";
import "./tailwind.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Register.jsx";
import Login from "./Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
