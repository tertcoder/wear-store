import { useDispatch, useSelector } from "react-redux";
import Line from "../assets/icons/smll.svg";
import Upload from "../assets/icons/Upload.svg";
import { newShoeIsOpen, setNewShoeIsOpen } from "../store/store";
import { twMerge } from "tailwind-merge";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

function NewShoe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isOpen = useSelector(newShoeIsOpen);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const isOpenUrl = searchParams.get("newShoeIsOpen");

  useEffect(() => {
    if (isOpenUrl && isOpenUrl === "true") dispatch(setNewShoeIsOpen(true));
  }, [dispatch, isOpenUrl]);

  useEffect(() => {
    function handleClick(e: Event) {
      //@ts-expect-error | the error is "Property 'classList' does not exist on type 'EventTarget'" whereas classList exist in Javascript but it won't work in production using typescript that why i'm ignoring the error to make it work
      if (!e?.target?.classList.contains("overlay")) return;
      setSearchParams({});
      dispatch(setNewShoeIsOpen(false));
    }
    const containerElement = containerRef.current;
    containerElement?.addEventListener("click", handleClick);

    return () => {
      containerElement?.removeEventListener("click", handleClick);
    };
  }, [dispatch, setSearchParams]);

  return (
    <div
      ref={containerRef}
      className={twMerge(
        `overlay fixed inset-0 z-10 flex origin-bottom items-end justify-center bg-neutral-400/10 backdrop-blur-[2px] duration-150`,
        `${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`,
      )}
      // className={twMerge(
      //   `overlay fixed inset-0 z-10 flex items-end justify-center bg-neutral-400/10 backdrop-blur-[2px] duration-150`,
      //   `${isOpen ? "opacity-1 translate-y-0" : "translate-y-full opacity-0"}`,
      // )}
    >
      <div className="relative w-full max-w-7xl  overflow-y-auto rounded-t-[2.5rem] border border-bd-main bg-main-bg shadow-shdw-main">
        <img
          src={Line}
          alt="line"
          className="absolute left-1/2 top-4 -translate-x-1/2"
        />

        <div className="flex items-center justify-between border-b border-bd-gray px-16 py-12">
          <h1 className="text-4xl  font-semibold text-txt-main">
            Add a sneaker
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-6 px-16 py-8 lg:grid-cols-2">
          <label htmlFor="imageUpload">
            <div className="flex h-28 items-center justify-center rounded-[1.25rem] border border-bd-main bg-main-bg lg:h-full">
              <div className="flex flex-col items-center justify-center">
                <img src={Upload} alt="Upload" />
                <span className="text-xl font-normal text-txt-main">
                  Upload image
                </span>
              </div>
            </div>
            <input
              type="file"
              name="imageUpload"
              id="imageUpload"
              className="hidden"
            />
          </label>
          <div className="rounded-[1.25rem] bg-white px-16 py-9 shadow-shdw-main">
            <form className="w-full space-y-[1.125rem] ">
              <div className="flex w-full flex-col gap-[1.38rem]">
                <label
                  className="text-base font-medium text-txt-main"
                  htmlFor="name"
                >
                  Shoe name
                </label>
                <input
                  className="rounded-[0.625rem] border border-bd-gray bg-white p-2.5 text-txt-main outline-none placeholder:text-txt-gray  focus:border-bd-main"
                  required
                  type="text"
                  placeholder="Enter shoe name"
                  name="name"
                  id="name"
                />
              </div>
              <div className="flex w-full flex-col gap-[0.625rem]">
                <label
                  className="text-base font-medium text-txt-main"
                  htmlFor="brand"
                >
                  Shoe brand
                </label>
                <input
                  className="rounded-[0.625rem] border border-bd-gray bg-white p-2.5 text-txt-main outline-none placeholder:text-txt-gray  focus:border-bd-main"
                  required
                  type="text"
                  placeholder="Enter brand name"
                  name="brand"
                  id="brand"
                />
              </div>
              <div className="flex w-full flex-col gap-[0.625rem]">
                <label
                  className="text-base font-medium text-txt-main"
                  htmlFor="price"
                >
                  Shoe price
                </label>
                <input
                  className="rounded-[0.625rem] border border-bd-gray bg-white p-2.5 text-txt-main outline-none placeholder:text-txt-gray focus:border-bd-main"
                  required
                  placeholder="$00.0"
                  type="text"
                  name="price"
                  id="price"
                />
              </div>

              <button className="flex w-full items-center justify-center rounded-[0.625rem] border border-bd-main bg-btn-main-bg px-[7.25rem] py-[0.88rem]  shadow-shdw-main">
                <span className="text-base font-semibold text-txt-main">
                  Submit
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewShoe;
