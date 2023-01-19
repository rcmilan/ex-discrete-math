import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Logic from "../pages/logic";

const wrapperStyle: React.CSSProperties = {
  padding: "10px",
};

const router = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/logic"}>Logic</Link>
          </li>
        </ul>
      </div>
      <div style={wrapperStyle}>
        <Routes>
          <Route path="/" element={<>Hello</>} />
          <Route path="/logic" element={<Logic />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

function App() {
  return <>{router()}</>;
}

export default App;
