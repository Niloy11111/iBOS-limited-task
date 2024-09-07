import React, { useContext } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { AuthContext } from "../../components/authProvider/AuthProvider";
import Product from "../../components/product/Product";
const ProductPage = () => {
  const { products } = useContext(AuthContext);
  return (
    <main className="flex w-5/6 mx-auto mt-[80px]">
      <div className="w-[25%] border-r h-[100vh] ">
        <div className="bg-black rounded-lg w-[80%] text-white py-[10px] pl-4 mt-[30px]">
          <h2 className="text-[22px] font-dinLight font-extrabold">
            {" "}
            Rocking chair
          </h2>
        </div>
        <h2 className="pl-[30px]  border-t border-b mt-[10px] text-[22px] py-[20px]  font-dinLight font-extrabold text-grayColor">
          {" "}
          Side chair
        </h2>
        <h2 className="pl-[30px]  mt-[10px] text-[22px] pt-[20px]  font-dinLight font-extrabold text-grayColor">
          {" "}
          Lounge chair
        </h2>
      </div>

      <div className="pl-[40px] w-[75%] ">
        <div className="grid grid-cols-3 gap-[20px]">
          {" "}
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
        {/* pagination */}
        <div className="flex gap-[8px] justify-center my-16">
          <div className="w-[35px] flex  items-center justify-center h-[30px] rounded-sm bg-[#ECECEC]">
            <MdOutlineKeyboardArrowLeft className="text-[20px] text-grayColor"></MdOutlineKeyboardArrowLeft>
          </div>
          <div className="w-[35px] flex items-center justify-center h-[30px] border border-black rounded-[5px]">
            <h2 className="font-dinLight font-semibold ">1</h2>
          </div>
          <div className="w-[35px] flex items-center justify-center h-[30px] border  rounded-[5px]">
            <h2 className="font-dinLight font-semibold ">2</h2>
          </div>
          <div className="w-[35px] flex items-center justify-center h-[30px] border  rounded-[5px]">
            <h2 className="font-dinLight font-semibold ">...</h2>
          </div>
          <div className="w-[35px] flex items-center justify-center h-[30px] border  rounded-[5px]">
            <h2 className="font-dinLight font-semibold ">9</h2>
          </div>
          <div className="w-[35px] flex items-center justify-center h-[30px] border  rounded-[5px]">
            <h2 className="font-dinLight font-semibold ">10</h2>
          </div>
          <div className="w-[35px] flex  items-center justify-center h-[30px] rounded-sm border">
            <MdOutlineKeyboardArrowRight className="text-[20px] text-grayColor"></MdOutlineKeyboardArrowRight>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
