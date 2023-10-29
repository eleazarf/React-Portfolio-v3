import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/index";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Projects from "./pages/Projects/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;