import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import HowIDesignedThisWebsite from "./articles/HowIDesignedThisWebsite";

function App() {
  return (
    <Router>
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
