// Import necessary modules and components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/index"; // Import the 'Header' component
import Home from "./pages/Home/index"; // Import the 'Home' page component
import About from "./pages/About/index"; // Import the 'About' page component
import Projects from "./pages/Projects/index"; // Import the 'Projects' page component

// Define the 'App' component
function App() {
  return (
    <div className="App">
      <Router>
        <Header /> {/* Render the 'Header' component at the top of the app */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Define a route for the 'Home' page */}
          <Route path="/about" element={<About />} /> {/* Define a route for the 'About' page */}
          <Route path="/projects" element={<Projects />} /> {/* Define a route for the 'Projects' page */}
        </Routes>
      </Router>
    </div>
  );
}

// Export the 'App' component as the default export
export default App;
