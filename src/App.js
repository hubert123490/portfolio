import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<div>Hello</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
