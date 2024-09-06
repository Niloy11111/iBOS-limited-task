import { useContext, useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/authProvider/AuthProvider";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();
  const { user, login, error, setError } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (isChecked) {
      login(email, password);
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
    <>
      <div className="flex items-center justify-center">
        <div className="flex-1 ">
          <div className="bg-[#fafafa] w-[500px] mx-auto py-[70px] px-[25px] mt-[20px]">
            <div>
              <h2 className="text-[30px]  font-dinRegular font-bold ">
                Welcome Back
              </h2>

              <p className="text-[#929292] font-semibold  font-dinLight">
                Enter your Credentials to access your account
              </p>
            </div>
            <form className="" action="" onSubmit={handleLogin}>
              <div className="relative">
                <input
                  className="pb-2 pt-6 pl-2 border outline-none bg-white w-full rounded-[6px] border-[#DEDEDE] text-sm mt-[20px] font-dinRegular "
                  id="email"
                  placeholder="Enter your email"
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
                  className="pb-2 pt-6 pl-2 border outline-none bg-white w-full rounded-[6px] border-[#DEDEDE] text-sm mt-[20px] font-dinRegular "
                  id="email"
                  placeholder="Enter your password"
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

              <div className="flex items-center gap-[5px] my-3">
                <input
                  onChange={(e) => setIsChecked(e.target.checked)}
                  type="checkbox"
                  id="exampleCheckbox"
                />
                <p className="text-[15px] text-[#000000] font-dinLight font-bold ">
                  I agree to the{" "}
                  <span className="underline">terms & policy</span>{" "}
                </p>
              </div>

              {error && (
                <p className=" mb-[10px] text-red-500 font-dinLight font-semibold ">
                  {error}
                </p>
              )}

              <button className="bg-black py-4 rounded-[8px] w-full text-white font-dinLight font-semibold ">
                Sign In
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
                Don't Have an account{" "}
                <Link className="text-[#4A6CE5]" to="/signup">
                  Sign Up
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
              collection of products. From fashion to electronics, we bring{" "}
              <br /> quality.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
