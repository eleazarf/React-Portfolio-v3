import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
       <Router>
         <Nav />
       </Router>
    </div>
  );
}

export default App;
