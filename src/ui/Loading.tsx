function Loading() {
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-main-bg">
      {/* <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#FB923C]">
      </div> */}
      <div className="h-3 w-9 rounded-full border border-bd-main bg-[#FB923C] shadow-shdw-main motion-safe:animate-spin"></div>

      <span className="translate-x-2 text-xl font-medium text-txt-gray">
        Loading...
      </span>
    </div>
  );
}

export default Loading;
