import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut, cartItems } = useContext(AuthContext);
  const navigate = useNavigate();
  const userLogout = () => {
    logOut();
    navigate("/");
  };

  const myCartItems = cartItems?.filter((item) => item.email === user?.email);

  const copyOfcartItems = JSON.parse(localStorage.getItem("orders"));
  const filteredForMyCart = copyOfcartItems?.filter(
    (item) => item.email === user?.email
  );

  return (
    <section className="border-b pb-[50px] ">
      <nav className="flex items-center w-5/6 mx-auto justify-between ">
        <div className="flex items-center gap-[5px]">
          <div>
            <img
              className="w-[40px]"
              src="https://i.ibb.co/pvB63sq/icon-1.png"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-[22px] font-dinBold font-bold">
              Furni<span className="text-[#1E99F5] ">Flex</span>
            </h2>
          </div>
        </div>

        <div>
          <ul className="flex items-center gap-[40px] list-none font-dinLight font-bold text-[18px]">
            <li>
              <Link>Home</Link>
            </li>
            <li className="bg-[#f8f8f8] px-4 py-2 rounded-[8px]">
              <Link>Products</Link>
            </li>
            <li>
              <Link>Categories</Link>
            </li>
            <li>
              <Link>Customs</Link>
            </li>
            <li>
              <Link>Blog sdfsdfds</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-[25px]">
          <button
            className="bg-[#202020] text-white font-dinLight
          font-bold px-3 py-1.5 rounded-[4px] flex "
            onClick={userLogout}
          >
            Logout
          </button>
          <Link to="/root/checkout">
            <div className="relative">
              <img
                className="w-[30px]"
                src="https://i.ibb.co/gm3JWpn/shopping-bag.png"
                alt=""
              />
              <div className="absolute right-[-2px] bottom-[-2px] rounded-lg w-[16px] h-[16px] bg-[#323232] flex items-center justify-center">
                <h2 className="text-[10px] font-dinLight font-semibold text-white">
                  {filteredForMyCart?.length}
                </h2>
              </div>
            </div>
          </Link>
          <img src="https://i.ibb.co/9wK6JCZ/Account.png" alt="" />
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
