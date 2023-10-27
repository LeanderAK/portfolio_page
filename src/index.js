import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { ProjectPageBA } from "./pages/projectPageBA";
import { ProjectPageBLUBBLE } from "./pages/projectPageBLUBBLE";
import { ProjectPageCREAPE } from "./pages/projectPageCREAPE";
import { ImprintPage } from "./pages/imprintPage";
import { PrivacyPolicyPage } from "./pages/privacyPolicyPage";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App() {
  <link rel="stylesheet" href="./../src/index.css"></link>
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />}/>
            <Route path="blubble" element={<ProjectPageBLUBBLE />}/>
            <Route path="ba" element={<ProjectPageBA />}/>
            <Route path="creape" element={<ProjectPageCREAPE />}/>

            <Route path="imprint" element={<ImprintPage />}/>
            <Route path="privacy" element={<PrivacyPolicyPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);