import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
const Product = ({ product }) => {
  const { user, handleAddToCart } = useContext(AuthContext);

  const {
    id,
    img,
    title,
    presentPrice,
    previousPrice,
    discountPrice,
    description,
  } = product;

  return (
    <div className="border rounded-lg p-4">
      <div className="bg-[#f2f2f2] rounded-lg">
        <img className="w-full " src={img} alt="" />
      </div>
      <div className="mt-[20px]">
        <h2 className="font-dinLight font-extrabold text-lg ">{title}</h2>
        <div className="flex justify-between mt-[12px]">
          <h3 className="font-dinRegular font-extrabold text-lg ">
            €{presentPrice}.00
          </h3>
          <h3 className="font-dinUltraLight font-extrabold text-gray-400 text-lg line-through ">
            €{previousPrice}.00
          </h3>
          <h3 className="font-dinRegular font-extrabold  text-lg text-[#B92E2E]">
            {discountPrice}% OFF
          </h3>
        </div>
        <p className="my-[15px] text-gray-400 text-sm font-dinRegular font-medium">
          {description}
        </p>
        <button
          onClick={() => handleAddToCart(id, product)}
          className="bg-[#202020] flex gap-[10px] items-center w-full rounded-lg py-2.5 text-white justify-center font-dinLight font-semibold"
        >
          <img
            className="w-[20px] "
            src="https://i.ibb.co/tJ3DXjq/shopping-bag-1.png"
            alt=""
          />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
