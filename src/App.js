import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import HowIDesignedThisWebsite from "./articles/HowIDesignedThisWebsite";

// Scroll manager for anchors + route changes
function ScrollToHashElement() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // wait until DOM paints, then scroll to element
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      // always reset to top when no hash
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
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Portfolio />
                  <Blog />
                </>
              }
            />
            <Route path="/blog/1" element={<HowIDesignedThisWebsite />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
