import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/icons/Google.svg";
import FacebookIcon from "../../assets/icons/Facebook.svg";
import { SubmitHandler, useForm } from "react-hook-form";

type SignupDataType = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignupDataType>();

  const onSubmit: SubmitHandler<SignupDataType> = (data) => console.log(data);

  return (
    <div className="flex flex-col items-center gap-6 py-6">
      <div className="w-full max-w-md space-y-4 text-center font-medium text-txt-main">
        <h3>
          Welcome to <span className="font-semibold underline">WearStore</span>
        </h3>
        <p>Wear the Trend - Sign Up for Sneaker Updates</p>
      </div>
      <div className="flex w-[28rem] flex-col gap-6  py-[0.625rem]">
        <form
          className="w-full space-y-[1.125rem]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-2.5">
            <div className="relative flex w-full flex-col gap-[0.625rem]">
              <label
                className="text-base font-medium text-txt-main"
                htmlFor="firstname"
              >
                Firstname *
              </label>
              <input
                className="w-full rounded-[0.625rem] border border-bd-gray bg-main-bg p-2.5 text-txt-main outline-none placeholder:text-txt-gray focus:border-bd-main"
                placeholder="Enter your firstname"
                type="text"
                {...register("firstname", {
                  required: "This field is required",
                })}
                id="firstname"
              />
              {errors?.firstname?.message && (
                <span className="absolute -bottom-5  text-sm font-medium text-red-400">
                  *{errors?.firstname?.message}
                </span>
              )}
            </div>
            <div className="relative flex w-full flex-col gap-[0.625rem]">
              <label
                className="text-base font-medium text-txt-main"
                htmlFor="lastname"
              >
                Lastname *
              </label>
              <input
                className="w-full rounded-[0.625rem] border border-bd-gray bg-main-bg p-2.5 text-txt-main outline-none placeholder:text-txt-gray focus:border-bd-main"
                placeholder="Enter your lastname"
                type="text"
                {...register("lastname", {
                  required: "This field is required",
                })}
                id="lastname"
              />
              {errors?.lastname?.message && (
                <span className="absolute -bottom-5  text-sm font-medium text-red-400">
                  *{errors?.lastname?.message}
                </span>
              )}
            </div>
          </div>
          <div className="relative flex w-full flex-col gap-[0.625rem]">
            <label
              className="text-base font-medium text-txt-main"
              htmlFor="email"
            >
              Email address *
            </label>
            <input
              className="rounded-[0.625rem] border border-bd-gray bg-main-bg p-2.5 text-txt-main outline-none placeholder:text-txt-gray  focus:border-bd-main"
              type="text"
              placeholder="Enter your email address"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
              id="email"
            />
            {errors?.email?.message && (
              <span className="absolute -bottom-5  text-sm font-medium text-red-400">
                *{errors?.email?.message}
              </span>
            )}
          </div>
          <div className="relative flex w-full flex-col gap-[0.625rem]">
            <label
              className="text-base font-medium text-txt-main"
              htmlFor="password"
            >
              Password *
            </label>
            <input
              className="rounded-[0.625rem] border border-bd-gray bg-main-bg p-2.5 text-txt-main outline-none placeholder:text-txt-gray focus:border-bd-main"
              placeholder="Enter your password"
              type="password"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password need a minimun of 8 characters",
                },
              })}
              id="password"
            />
            {errors?.password?.message && (
              <span className="absolute -bottom-5  text-sm font-medium text-red-400">
                *{errors?.password?.message}
              </span>
            )}
          </div>
          <div className="relative flex w-full flex-col gap-[0.625rem]">
            <label
              className="text-base font-medium text-txt-main"
              htmlFor="confirm_password"
            >
              Confirm Password
            </label>
            <input
              className="rounded-[0.625rem] border border-bd-gray bg-main-bg p-2.5 text-txt-main outline-none placeholder:text-txt-gray focus:border-bd-main"
              placeholder="Enter your password again"
              type="password"
              {...register("passwordConfirm", {
                required: "This field is required",
                validate: (value) =>
                  value === getValues().password || "Password needs to match",
              })}
              id="confirm_password"
            />
            {errors?.passwordConfirm?.message && (
              <span className="absolute -bottom-5  text-sm font-medium text-red-400">
                *{errors?.passwordConfirm?.message}
              </span>
            )}
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
