import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/icons/Google.svg";
import FacebookIcon from "../../assets/icons/Facebook.svg";
import { SubmitHandler, useForm } from "react-hook-form";

type LoginDataType = {
  email: string;
  password: string;
};

function Login() {
  const { register, handleSubmit } = useForm<LoginDataType>();
  const onSubmit: SubmitHandler<LoginDataType> = (data) => console.log(data);

  return (
    <div className="flex flex-col items-center gap-6 py-6">
      <div className="w-full max-w-md space-y-4 text-center font-medium text-txt-main">
        <h3>
          Welcome to <span className="font-semibold underline">WearStore</span>
        </h3>
        <p>Stay in Stride - Log In for the Latest Sneaker Releases</p>
      </div>
      <div className="flex w-[24rem] flex-col gap-6  py-[0.625rem]">
        <form
          className="w-full space-y-[1.125rem]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex w-full flex-col gap-[0.625rem]">
            <label
              className="text-base font-medium text-txt-main"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              className="rounded-[0.625rem] border border-bd-gray bg-main-bg p-2.5 text-txt-main outline-none placeholder:text-txt-gray  focus:border-bd-main"
              required
              type="email"
              placeholder="Enter your email address"
              {...register("email", { required: true })}
              id="email"
            />
          </div>
          <div className="flex w-full flex-col gap-[0.625rem]">
            <label
              className="text-base font-medium text-txt-main"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="rounded-[0.625rem] border border-bd-gray bg-main-bg p-2.5 text-txt-main outline-none placeholder:text-txt-gray focus:border-bd-main"
              required
              placeholder="Enter your password"
              type="password"
              {...register("password", { required: true })}
              id="password"
            />
            <div className="text-end text-xs text-txt-gray">
              Forgot password?{" "}
              <span className="cursor-pointer underline">Reset</span>
            </div>
          </div>
          <div className="flex w-full flex-col gap-[0.625rem]">
            <button className="flex items-center justify-center rounded-[0.625rem] border border-bd-main bg-btn-main-bg p-2.5 shadow-shdw-main">
              <span className="text-base font-semibold text-txt-main">
                Sign In
              </span>
            </button>
            <div className="text-center text-xs text-txt-gray">
              I don’t have an account?{" "}
              <Link to="/signup" className="cursor-pointer underline">
                Sign up
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
              Log in with Google
            </span>
            <img src={GoogleIcon} alt="Google Logo" />
          </button>
          <button className="flex items-center justify-center  gap-2.5 rounded-[0.625rem] border border-bd-main bg-btn-white-bg p-2.5 shadow-shdw-main">
            <span className="text-base font-semibold text-txt-main">
              Log in with Facebook
            </span>
            <img src={FacebookIcon} alt="Facebook Logo" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
