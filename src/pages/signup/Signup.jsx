import { useContext, useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/authProvider/AuthProvider";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const { user, signup, error, setError } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (isChecked) {
      signup(email, password);
    } else {
      setError("Please accept our terms & policy");
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/root");
    }
  }, [user]);
  return (
    <div className="flex items-center justify-center">
      <div className="flex-1 ">
        <div className="bg-[#fafafa] w-[500px] mx-auto py-[20px]">
          <div>
            <h2 className="text-[26px] text-center font-dinRegular font-bold mb-[-15px]">
              Welcome To
            </h2>
            <h1 className="text-center text-[50px] font-dinBold font-bold">
              Furni
              <span className="text-[#1E99F5] ">Flex</span>
            </h1>
            <p className="text-[#929292] text-[18px] font-medium text-center font-Inter">
              Signup for purchase your desire prducts
            </p>
          </div>
          <form
            className="px-[25px] mt-[20px]"
            action=""
            onSubmit={handleSignUp}
          >
            <div className="flex gap-[20px] relative">
              <input
                className="font-dinRegular pb-2 pt-6 pl-2 border outline-none bg-white w-full rounded-[6px] border-[#DEDEDE] text-sm "
                type="text"
                id="email"
                required
              />
              <input
                className="font-dinRegular pb-2 pt-6 pl-2 border outline-none bg-white w-full rounded-[6px] border-[#DEDEDE] text-sm"
                type="text"
                id="email"
                required
              />

              <h3 className="top-[4px]  left-[10px] absolute text-sm text-grayColor">
                First name(optional)
              </h3>
              <h3 className="top-[4px] right-[85px] absolute text-sm text-grayColor">
                Last name(optional)
              </h3>
            </div>
            <div className="relative">
              <input
                className="font-dinRegular pb-2 pt-6 pl-2 border outline-none bg-white w-full rounded-[6px] border-[#DEDEDE] text-sm mt-[20px]"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <h3 className="top-[24px] left-[10px] absolute text-sm text-grayColor">
                Email adress
              </h3>
            </div>

            <div className="relative">
              <input
                className="font-dinRegular pb-2 pt-6 pl-2 border outline-none bg-white w-full rounded-[6px] border-[#DEDEDE] text-sm mt-[20px]"
                id="email"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="text-xl cursor-pointer absolute top-9 right-2"
              >
                {showPassword ? (
                  <AiFillEye className="text-2xl text-[#707070]"></AiFillEye>
                ) : (
                  <AiFillEyeInvisible className="text-2xl text-[#707070]"></AiFillEyeInvisible>
                )}
              </span>
              <h3 className="top-[24px] left-[10px] absolute text-sm text-grayColor">
                Password
              </h3>
            </div>

            <div className="flex items-center my-3">
              <input
                onChange={(e) => setIsChecked(e.target.checked)}
                type="checkbox"
                id="exampleCheckbox"
              />
              <p className="text-[15px] text-[#000000] font-dinLight font-bold">
                I agree to the <span className="underline">terms & policy</span>{" "}
              </p>
            </div>

            {error && (
              <p className=" mb-[10px] text-red-500 font-dinLight font-semibold ">
                {error}
              </p>
            )}

            <button className="bg-black py-4 rounded-[8px] w-full text-white font-dinLight font-semibold ">
              Signup
            </button>

            <div className="flex items-center mt-[15px] justify-center">
              <div className="w-[50%] bg-[#DEDEDE] h-[2px]"></div>
              <span className="font-dinRegular text-sm">or</span>

              <div className="w-[50%] bg-[#DEDEDE] h-[2px]"></div>
            </div>
            <div className="flex gap-[20px] mt-[15px]">
              <div className="cursor-pointer flex items-center gap-2 border border-[#DEDEDE] w-full rounded-[8px] py-3 justify-center ">
                <FcGoogle className="text-2xl"></FcGoogle>
                <h2 className="font-bold text-sm font-dinLight ">
                  Sign in with Google
                </h2>
              </div>
              <div className="cursor-pointer flex items-center  gap-2 border border-[#DEDEDE] w-full rounded-[8px] py-3 justify-center">
                <FaApple className="text-2xl"></FaApple>
                <h2 className="font-bold text-sm font-dinLight ">
                  Sign in with Apple
                </h2>
              </div>
            </div>

            <p className="text-[15px] text-[#000000] font-dinLight font-bold text-center mt-[30px]">
              {" "}
              Have an account{" "}
              <Link className="text-[#4A6CE5]" to="/">
                Sign In
              </Link>
            </p>
            <img src="" alt="" />
          </form>
        </div>
      </div>

      <div
        className="h-[100vh] flex-1 flex justify-center items-center  bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url(https://i.ibb.co/BGxV3mv/Furni-Flex.png)",
        }}
      >
        <div>
          <img
            className="mx-auto"
            src="https://i.ibb.co/pvB63sq/icon-1.png"
            alt=""
          />
          <h1 className="mt-[-10px] text-center text-[50px] font-dinBold font-bold text-white">
            Furni
            <span className="text-[#1E99F5] ">Flex</span>
          </h1>
          <p className="text-[#DCDCDC] font-dinLight font-semibold text-center">
            Discover a seamless shopping experience with our curated <br />{" "}
            collection of products. From fashion to electronics, we bring <br />{" "}
            quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
