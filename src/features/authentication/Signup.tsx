import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/icons/Google.svg";
import FacebookIcon from "../../assets/icons/Facebook.svg";

function Signup() {
  return (
    <div className="flex flex-col items-center gap-6 py-6">
      <div className="w-full max-w-md space-y-4 text-center font-medium text-txt-main">
        <h3>
          Welcome to <span className="font-semibold underline">WearStore</span>
        </h3>
        <p>Wear the Trend - Sign Up for Sneaker Updates</p>
      </div>
      <div className="flex w-[28rem] flex-col gap-6  py-[0.625rem]">
        <form className="w-full space-y-[1.125rem] ">
          <div className="flex gap-2.5">
            <div className="flex w-full flex-col gap-[0.625rem]">
              <label
                className="text-base font-medium text-txt-main"
                htmlFor="firstname"
              >
                Firstname *
              </label>
              <input
                className="w-full rounded-[0.625rem] border border-bd-gray bg-main-bg p-2.5 text-txt-main outline-none placeholder:text-txt-gray focus:border-bd-main"
                required
                placeholder="Enter your firstname"
                type="text"
                name="firstname"
                id="firstname"
              />
            </div>
            <div className="flex w-full flex-col gap-[0.625rem]">
              <label
                className="text-base font-medium text-txt-main"
                htmlFor="lastname"
              >
                Lastname *
              </label>
              <input
                className="w-full rounded-[0.625rem] border border-bd-gray bg-main-bg p-2.5 text-txt-main outline-none placeholder:text-txt-gray focus:border-bd-main"
                required
                placeholder="Enter your lastname"
                type="text"
                name="lastname"
                id="lastname"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-[0.625rem]">
            <label
              className="text-base font-medium text-txt-main"
              htmlFor="email"
            >
              Email address *
            </label>
            <input
              className="rounded-[0.625rem] border border-bd-gray bg-main-bg p-2.5 text-txt-main outline-none placeholder:text-txt-gray  focus:border-bd-main"
              required
              type="email"
              placeholder="Enter your email address"
              name="email"
              id="email"
            />
          </div>
          <div className="flex w-full flex-col gap-[0.625rem]">
            <label
              className="text-base font-medium text-txt-main"
              htmlFor="password"
            >
              Password *
            </label>
            <input
              className="rounded-[0.625rem] border border-bd-gray bg-main-bg p-2.5 text-txt-main outline-none placeholder:text-txt-gray focus:border-bd-main"
              required
              placeholder="Enter your password"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div className="flex w-full flex-col gap-[0.625rem]">
            <label
              className="text-base font-medium text-txt-main"
              htmlFor="confirm_password"
            >
              Confirm Password
            </label>
            <input
              className="rounded-[0.625rem] border border-bd-gray bg-main-bg p-2.5 text-txt-main outline-none placeholder:text-txt-gray focus:border-bd-main"
              required
              placeholder="Enter your password again"
              type="password"
              name="confirm_password"
              id="confirm_password"
            />
          </div>
          <div className="flex w-full flex-col gap-2.5 pt-2.5">
            <button className="flex items-center justify-center rounded-[0.625rem] border border-bd-main bg-btn-main-bg p-2.5 shadow-shdw-main">
              <span className="text-base font-semibold text-txt-main">
                Sign Up
              </span>
            </button>
            <div className="text-center text-xs text-txt-gray">
              Already have an account?{" "}
              <Link to="/login" className="cursor-pointer underline">
                Sign in
              </Link>
            </div>
          </div>
        </form>
        <div className="relative flex w-full flex-col gap-[1.125rem] border-t border-bd-gray pt-6">
          <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-bd-gray bg-main-bg px-2.5 text-sm font-normal text-txt-gray">
            or
          </span>
          <button className="flex items-center justify-center  gap-2.5 rounded-[0.625rem] border border-bd-main bg-btn-white-bg p-2.5 shadow-shdw-main">
            <span className="text-base font-semibold text-txt-main">
              Sign up with Google
            </span>
            <img src={GoogleIcon} alt="Google Logo" />
          </button>
          <button className="flex items-center justify-center  gap-2.5 rounded-[0.625rem] border border-bd-main bg-btn-white-bg p-2.5 shadow-shdw-main">
            <span className="text-base font-semibold text-txt-main">
              Sign up with Facebook
            </span>
            <img src={FacebookIcon} alt="Facebook Logo" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
