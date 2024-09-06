import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
const Checkout = () => {
  const [subTotal, setSubTotal] = useState(0);
  const { filteredCartItems } = useContext(AuthContext);

  useEffect(() => {
    const total = filteredCartItems?.reduce(
      (accumulated, item) => accumulated + parseInt(item.presentPrice),
      0
    );

    setSubTotal(total);
  }, [filteredCartItems]);

  return (
    <div className="flex mt-[20px] gap-[80px] justify-between w-5/6 mx-auto">
      <div className="w-[65%]">
        <h1 className=" text-[28px] font-dinRegular font-extrabold">
          An overview of your order
        </h1>
        <div className="grid grid-cols-1 mt-[30px]">
          {" "}
          {filteredCartItems?.map((product) => (
            <CheckoutProduct
              key={product.id}
              product={product}
            ></CheckoutProduct>
          ))}
        </div>
      </div>

      <div className="w-[35%]">
        <h1 className="text-[28px] font-dinRegular font-extrabold">
          Order details
        </h1>
        <div className="mt-[30px] p-6 border rounded-xl bg-[#fafafa] ">
          <div className="flex justify-between mb-[10px]">
            <div>
              <h2 className="text-xl font-dinUltraLight font-bold text-grayColor">
                Subtotal
              </h2>
            </div>
            <div>
              <h2 className="text-xl font-dinUltraLight font-bold text-grayColor">
                €{subTotal}.00
              </h2>
            </div>
          </div>
          <div className="flex justify-between mb-[10px] ">
            <div>
              <h2 className="text-xl font-dinUltraLight font-bold text-grayColor">
                Shipping
              </h2>
            </div>
            <div>
              <h2 className="text-xl font-dinUltraLight font-bold text-grayColor">
                Free
              </h2>
            </div>
          </div>
          <div className="flex justify-between mb-[10px] border-b pb-[30px]">
            <div>
              <h2 className="text-xl font-dinUltraLight font-bold text-grayColor">
                Estimated Tax
              </h2>
            </div>
            <div>
              <h2 className="text-xl font-dinUltraLight font-bold text-grayColor">
                €-
              </h2>
            </div>
          </div>
          <div className="flex justify-between mb-[10px] ">
            <div>
              <h2 className="text-xl font-dinRegular font-bold ">Total</h2>
            </div>
            <div>
              <h2 className="text-xl font-dinRegular font-bold ">
                €{subTotal}.00
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
