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

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <About />
      <Hero />
      <Offers />
      <Companies />
      <Column />
      <Templates />
      <Features />
      <SliderComponent />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
