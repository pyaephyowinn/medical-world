import imgCategory from "../../img/category.png";


const CategoryCard = () => {
  return (
    <div>
      <div className="w-20 h-20 sm:w-28 sm:h-28 mb-4">
        <img className="w-full h-full" src={imgCategory} alt="" />
      </div>
      <div className="w-[8ch] text-lg sm:text-2xl text-center">
        Family Hospital
      </div>
    </div>
  );
};
export default CategoryCard;
