import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout.js";
import Connect from "./connect.js";
import About from "./about.js";
import FairnessMetrics from "./fairness_metrics.js"
import Home from "./home.js"
import ProjectAnalysis from "./regulations_and_guidelines.js"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Connect />} />
          <Route path="/regulations_and_guidelines" element={<ProjectAnalysis />} />
          <Route path="/fairness_metrics" element={<FairnessMetrics />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/home" element={<Home />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));