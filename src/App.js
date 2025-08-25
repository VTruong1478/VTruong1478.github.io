import React from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <About />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
