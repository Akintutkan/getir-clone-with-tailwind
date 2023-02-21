import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import Campaings from "./components/Campaings";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import MobileApp from "./components/MobileApp";
import Categories from "./components/Categories";

function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <Categories/>
    <Campaings/>
    <Favorites />
    <MobileApp />
    <Cards/>
    <Footer/>
    </>
  );
}

export default App;
