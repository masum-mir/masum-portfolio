import "./App.scss";
import "./assets/styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About"; 
import Skills from "./components/Skills";
import NotFound from "./components/NotFound";
import Construction from "./components/Construction";

function App() {
  return ( 
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="works" element={<Construction />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes> 
      </div>
  );
}

export default App;
