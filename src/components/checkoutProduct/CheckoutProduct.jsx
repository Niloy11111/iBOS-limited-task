import { useContext } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { AuthContext } from "../authProvider/AuthProvider";
const CheckoutProduct = ({ product }) => {
  const { handleRemove } = useContext(AuthContext);
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
    <div className="bg-[#fafafa] p-5 rounded-[8px]">
      <div className="flex justify-between">
        <div className="flex items-center gap-[8px] ">
          <div className="border rounded-[6px] flex items-center gap-[5px] py-1.5 px-1 max-w-max">
            <FiMinus></FiMinus>
            <span>1</span>
            <FiPlus></FiPlus>
          </div>
          <div className="flex">
            <div className="bg-[#EAEAEA] w-[100px] rounded-[6px] ">
              <img className=" h-[100px]" src={img} alt="" />
            </div>
            <div className="mt-[10px] ml-[10px]">
              <h2 className="font-dinRegular font-extrabold  "> {title}</h2>
            </div>
          </div>
        </div>
        <div className="cursor-pointer" onClick={() => handleRemove(id)}>
          <RxCross1></RxCross1>
        </div>
      </div>
      <div className="text-right border-b pb-10">
        <h2 className="font-dinRegular font-extrabold text-lg ">
          {" "}
          €{presentPrice}.00
        </h2>
      </div>
    </div>
  );
};

export default CheckoutProduct;
