import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <>
      <Routes>
        <Route path={"/portfolio"} element={<Home />} />
        <Route path={"/projects"} element={<Projects />} />
      </Routes>
    </>
  );
}
