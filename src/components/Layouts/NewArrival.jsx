import ProductsSlider from "../UI/ProductsSlider";
import img from "../../img/img-product1.jpg"

const NewArrival = () => {
  return (
    <div className="grid grid-cols-12 p-4 sm:py-8 sm:px-0">
      <div className="col-span-12 sm:col-start-2 sm:col-span-10">
        <h2 className="text-center text-2xl sm:text-5xl font-medium text-gray-700 mb-4 sm:mb-8 md:mb-12">
          New Arrival
        </h2>
        <div>
          <ProductsSlider img={img} />
        </div>
      </div>
    </div>
  );
};
export default NewArrival;
