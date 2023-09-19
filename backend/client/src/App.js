import "./App.css";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Register from "./component/Register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
