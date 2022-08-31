import Categories from "./components/Layouts/Categories";
import MainImageSlider from "./components/Layouts/MainImageSlider";
import Navbar from "./components/Layouts/Navbar";
import NewArrival from "./components/Layouts/NewArrival";
import Promotion from "./components/Layouts/Promotion";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import Buy1Get1 from "./components/Layouts/Buy1Get1";
import Rewards from "./components/Layouts/Rewards";
import SecondarySlider from "./components/Layouts/SecondarySlider";
import FamilyUniforms from "./components/Layouts/FamilyUniforms";
import Accessories from "./components/Layouts/Accessories";
import FamilyHospitalUniform from "./components/Layouts/FamilyHospitalUniform";
import Littmann from "./components/Layouts/Littmann";
import SecurityUniform from "./components/Layouts/SecurityUniform";
import Footer from "./components/Layouts/Footer";

const App = () => {
  return (
    <>
    <div className="bg-GrayLight min-h-screen max-w-[1440px] mx-auto">
      <Navbar />
      <MainImageSlider />
      <Categories />
      <Promotion />
      <NewArrival />     
      <Buy1Get1 />
      <Rewards />
      <SecondarySlider />
      <FamilyUniforms />
      <Accessories />
      <FamilyHospitalUniform />
      <Littmann />
      <SecurityUniform />
    </div>
    <Footer />
    </>
  );
};
export default App;
