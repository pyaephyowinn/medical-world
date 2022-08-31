import ProductsSlider from "../UI/ProductsSlider";
import img from "../../img/img-product1.jpg"
import category from "../../img/category.png"

const Accessories = () => {
  return (
    <div className="grid grid-cols-12 p-4 sm:py-8 sm:px-0 border-b-8 border-GrayDark">
      <div className="col-span-12 sm:col-start-2 sm:col-span-10">
        <h2 className="text-center text-2xl sm:text-5xl font-medium flex justify-center items-center text-gray-700 mb-4 sm:mb-8 md:mb-12">
          <span>
            <img src={category} className="h-16 mr-4" alt="" />
          </span>
          Accessories
        </h2>
        <div>
          <ProductsSlider img={img} />
        </div>
      </div>
    </div>
  )
}
export default Accessories