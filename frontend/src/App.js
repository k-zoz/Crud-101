import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Addpp from "./components/Addpp";
import Showpp from "./components/Showpp";
import Product from "./components/Product";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Addpp />} />
          <Route path="/products" element={<Showpp />} />
          <Route path="/edit-product" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
