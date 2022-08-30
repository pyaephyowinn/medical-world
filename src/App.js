import Categories from "./components/Layouts/Categories";
import MainImageSlider from "./components/Layouts/MainImageSlider";
import Navbar from "./components/Layouts/Navbar";
import NewArrival from "./components/Layouts/NewArrival";
import Promotion from "./components/Layouts/Promotion";

const App = () => {
  return (
    <div className="bg-GrayLight min-h-screen max-w-[1440px] mx-auto">
      <Navbar />
      <MainImageSlider />
      <Categories />
      <Promotion />
      <NewArrival />
    </div>
  );
};
export default App;
