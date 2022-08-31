import imgViewAll from "../../img/img-view-all.png"

const ProductCardViewAll = ({ bgGray }) => {
  const bgColor = bgGray ? "bg-GrayDark" : "bg-white";
  return (
    <div className={`flex items-center justify-center rounded-xl w-[148px] h-[296px] border-2 ${bgColor}`}>
      <img src={imgViewAll} alt="" />
    </div>
  )
}
export default ProductCardViewAll