import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import Campaigns from "./components/Campaigns";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import MobileApp from "./components/MobileApp";
import Categories from "./components/Categories";

function App() {
  return (
    <>
    <Header/>
    <HeroSection />
      <Categories />
      <Campaigns />
      <div className="container mx-auto">
        <Favorites />
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </>
  );
  }
export default App;
