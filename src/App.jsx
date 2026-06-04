import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import Interior from "./Components/InteriorProjects/Interior";
import Fabrication from "./Components/Fabrication/Fabrication";
import Conferences from "./Components/Confrences/Conferences";
import ProductLaunch from "./Components/ProuductLaunch/ProductLaunch";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Header2 from "./Components/Navbar/Header2";
import SplashScreen from "./Components/SplashScreen/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const handleSplashFinish = useCallback(() => setShowSplash(false), []);

  return (
    <>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <Header2/>
      <Header />
      <Fabrication />
      <Services />
      <Conferences />
      <ProductLaunch />
      <Interior />
      <About />
      <Footer />
    </>
  )
}

export default App
