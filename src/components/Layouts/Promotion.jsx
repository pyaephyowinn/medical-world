import PromotionCard from "../UI/PromotionCard";

const Promotion = () => {
  return (
    <div className="grid grid-cols-12 bg-white p-4 sm:py-8 sm:px-0">
      <div className="col-span-12 sm:col-start-2 sm:col-span-10">
        <h2 className="text-center text-2xl sm:text-5xl font-medium text-gray-700 mb-4 sm:mb-8 md:mb-12">
          Promotion
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          <PromotionCard />
          <PromotionCard />
          <PromotionCard />
          <PromotionCard />
          <PromotionCard />
          <PromotionCard />
          <PromotionCard />
          <PromotionCard />
        </div>
      </div>
    </div>
  );
};
export default Promotion;
