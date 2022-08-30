import CategoryCard from "../UI/CategoryCard";

const Categories = () => {
  return (
    <div className="grid grid-cols-12 p-4 sm:py-8 sm:px-0 md:mt-4">
      <div className="col-span-12 sm:col-start-2 sm:col-span-10">

        <h2 className="text-center text-2xl sm:text-5xl font-medium text-gray-700 mb-4 sm:mb-8 md:mb-12">
          Categories
        </h2>

        <div className="flex overflow-scroll gap-4 sm:gap-20">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />        
        </div>
      </div>
    </div>
  );
};
export default Categories;
