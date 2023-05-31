import Menu from "./components/Menu";
import "./App.css";
import About from "./components/About";
import Column from "./components/Column";
import Companies from "./components/Companies";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import SliderComponent from "./components/SliderComponent";
import Templates from "./components/Templates";
import { useEffect, useState } from "react";
import Bottom from "./components/Bottom";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      if (scrollPosition > 0) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showDiv]);
  return (
    <div className="App">
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <About />
      <Hero />
      <Offers />
      <Companies />
      <Column />
      <Templates />
      <Features />
      <SliderComponent />
      <Footer />
      <Menu openMenu={openMenu} />
      <Bottom showDiv={showDiv} />
    </div>
  );
}

export default App;
