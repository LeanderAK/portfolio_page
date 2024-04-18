import ReactDOM from "react-dom/client";
import './css/App.css';
import './css/Timeline.css';
import './css/Project.css';
import './css/Navbar.css';
import './css/Framework.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { ProjectPageBA } from "./pages/projects/projectPageBA";
import { ProjectPageBLUBBLE } from "./pages/projects/projectPageBLUBBLE";
import { ImprintPage } from "./pages/imprintPage";
import { PrivacyPolicyPage } from "./pages/privacyPolicyPage";
import { ParallaxProvider } from "react-scroll-parallax";
import { NoPage } from "./pages/NoPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  <link rel="stylesheet" href="./../src/index.css"></link>
  return (
    <ParallaxProvider>
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="bachelor_thesis" element={<ProjectPageBA />} />
        <Route path="blubble" element={<ProjectPageBLUBBLE />} />
        <Route path="imprint" element={<ImprintPage />} />
        <Route path="privacy" element={<PrivacyPolicyPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </ParallaxProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);