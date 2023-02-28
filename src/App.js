import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import Campaigns from "./components/Campaigns";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import MobileApp from "./components/MobileApp";
import Categories from "./components/Categories";
import { useWindowWidth } from '@react-hook/window-size'

function App() {
  const windowWidth = useWindowWidth()

  return (
    <>
    <Header/>
    <HeroSection />
      <Categories />
      {windowWidth <= 768 && <Campaigns />}
      <div className="container mx-auto grid gap-y-6 pt-8">
        <Favorites />
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </>
  );
  }
export default App;
