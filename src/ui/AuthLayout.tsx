import { NavLink, Outlet } from "react-router-dom";
import WearShoeLogo from "../assets/icons/WearStoreLogo.svg";

function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex w-full max-w-3xl flex-col rounded-[0.625rem] bg-main-bg pb-8 shadow-shdw-main">
        <div className="border-lineColor flex items-center justify-center border-b py-6">
          <img src={WearShoeLogo} alt="WearShoe Logo" />
        </div>
        <div className="flex items-center justify-center gap-6 py-[1.125rem]">
          <NavLink
            to="/login"
            className="navAuth font-semibold shadow-shdw-main duration-150"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="navAuth font-semibold shadow-shdw-main duration-150"
          >
            Signup
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
