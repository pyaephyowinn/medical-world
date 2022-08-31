import iconFavourite from "../../img/favourite.png";
import iconMinus from "../../img/minus.png";
import iconAdd from "../../img/add.png";

const ProductCard = ({ bgGray, img, promoDate }) => {
  const bgColor = bgGray ? "bg-GrayDark" : "bg-white";
  return (
    <div className={`w-fit p-2 border-2 border-gray-100 rounded-xl ${bgColor}`}>
      <div className="w-32 h-32 overflow-hidden rounded-xl relative mb-2">
        <img src={img} alt="" />
        <div className="absolute top-1 right-1 h-6 rounded-full">
          <img src={iconFavourite} alt="" />
        </div>
      </div>

      {promoDate && (
        <div className="text-pink-500 text-xs text-center mb-1 tracking-tighter">
          Ends in {promoDate}
        </div>
      )}

      <div>
        <p className="leading-5 font-medium text-gray-600 text-center">
          <span>Sample Product</span>
          <span className="block">(Product Na...)</span>
          <span className="block mt-2 text-sky-500">25,600 KS</span>
        </p>
        <div className="flex justify-between my-3">
          <div className="hover:cursor-pointer">
            <img src={iconMinus} alt="" />
          </div>
          <div>0</div>
          <div className="hover:cursor-pointer">
            <img src={iconAdd} alt="" />
          </div>
        </div>
        <div className="bg-sky-500 text-white font-medium text-sm text-center rounded-lg">
          <button className="px-4 py-1">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
