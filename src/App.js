import { Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/homePage";
import { ProjectPageBA } from "./pages/projects/projectPageBA";
import { ProjectPageBLUBBLE } from "./pages/projects/projectPageBLUBBLE";
import { ImprintPage } from "./pages/imprintPage";
import { PrivacyPolicyPage } from "./pages/privacyPolicyPage";
import { ParallaxProvider } from "react-scroll-parallax";
import { NoPage } from "./pages/NoPage";
import "./index.css"
import './css/App.css';
import './css/Timeline.css';
import './css/Project.css';
import './css/Navbar.css';
import './css/Framework.css';

function App() {
  return (
    <ParallaxProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bachelor_thesis" element={<ProjectPageBA />} />
        <Route path="/blubble" element={<ProjectPageBLUBBLE />} />
        <Route path="/imprint" element={<ImprintPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
      </Routes>
    </ParallaxProvider>
  );
}

export default App;