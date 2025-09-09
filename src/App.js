import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

// Portfolio articles
import SmallBusinessGrowth from "./articles/SmallBusinessGrowth";
import ImprovingDeveloperExperience from "./articles/ImprovingDeveloperExperience";

// Blog articles
import HowIDesignedThisWebsite from "./articles/HowIDesignedThisWebsite";
import LessonsFromStartingBusiness from "./articles/LessonsFromStartingBusiness";

// Scroll manager for anchors + route changes
function ScrollToHashElement() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Homepage with sections */}
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Portfolio />
                  <Blog />
                  <Contact />
                </>
              }
            />

            {/* Blog posts */}
            <Route path="/blog/1" element={<HowIDesignedThisWebsite />} />
            <Route path="/blog/2" element={<LessonsFromStartingBusiness />} />

            {/* Portfolio posts */}
            <Route
              path="/portfolio/small-business-growth"
              element={<SmallBusinessGrowth />}
            />
            <Route
              path="/portfolio/developer-experience"
              element={<ImprovingDeveloperExperience />}
            />

            {/* Future portfolio pages can be added here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
