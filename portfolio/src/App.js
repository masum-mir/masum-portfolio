import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./assets/styles.scss";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About"; 
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
