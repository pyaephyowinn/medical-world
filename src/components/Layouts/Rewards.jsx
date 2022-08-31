import ProductsSlider from "../UI/ProductsSlider";
import img from "../../img/img-product1.jpg"

const Rewards = () => {
  return (
    <div className="grid grid-cols-12 p-4 sm:py-8 sm:px-0 bg-amber-500">
      <div className="col-span-12 sm:col-start-2 sm:col-span-10">
        <h2 className="text-center text-2xl sm:text-5xl font-medium text-gray-50 mb-4 sm:mb-8 md:mb-12">
          Rewards
        </h2>
        <div>
          <ProductsSlider img={img} promoDate={"23 Sept 2023"} />
        </div>
      </div>
    </div>
  )
}
export default Rewards