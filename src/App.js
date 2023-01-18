import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects"
import Contact from "./components/Contact";
import DrawerAppBar from "./components/Navbar";
import { useEffect, useState } from "react";


const App = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      <DrawerAppBar windowsize={windowSize}/>
      <Home/>
      <About/>
      <Projects windowsize={windowSize}/>
      <Contact/>
    </>
  )
}


function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

export default App;
