import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout.js";
import Contact from "./connect.js";
import About from "./about.js";
import FairnessMetrics from "./fairness_metrics.js"
import Home from "./home.js"
import RegulationsGuidelines from "./regulations_and_guidelines.js"
import ProjectAnalysis from "./project_analysis.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Contact />} />
          <Route path="/regulations_and_guidelines" element={<ProjectAnalysis />} />
          <Route index element={<Home />} />
          <Route path="/regulations_and_guidelines" element={<RegulationsGuidelines />} />
          <Route path="/fairness_metrics" element={<FairnessMetrics />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/project_analysis" element={<ProjectAnalysis />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));