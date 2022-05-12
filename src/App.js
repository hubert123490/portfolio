import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Thanks from "./components/Thanks/Thanks";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
