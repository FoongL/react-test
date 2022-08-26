import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestOne from "./pages/TestOne";
import TestTwo from "./pages/TestTwo";
import TestThree from "./pages/TestThree";
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<TestOne />} />
          <Route path="/about" element={<TestTwo />} />
          <Route path="/contact" element={<TestThree />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
