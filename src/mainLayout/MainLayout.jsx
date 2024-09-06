import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { checkLogin } from "../apis";
import { AuthContext } from "../components/authProvider/AuthProvider";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const email = checkLogin();
    if (!email) {
      navigate("/");
    }
  }, []);

  const userLogout = () => {
    logOut();
    navigate("/");
  };

  return (
    <div className=" mt-[50px]">
      <Navbar></Navbar>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
