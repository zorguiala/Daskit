import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "./context/ThemeContext";
import { store } from "./store/store";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Cards from "./components/Cards";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          test
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Cards />
          <Experience />
          <Contact />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
