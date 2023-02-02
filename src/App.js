import components from "./components";
import { Routes, Route } from "react-router-dom";

const { Home, CenterDiv, Circles, Navbar } = components;

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home components={components} />} />
        <Route path="/CenterDiv" element={<CenterDiv />} />
        <Route path="/Circles" element={<Circles />} />
      </Routes>
    </div>
  );
}

export default App;
