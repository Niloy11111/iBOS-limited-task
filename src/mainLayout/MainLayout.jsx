import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">First Hello</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
