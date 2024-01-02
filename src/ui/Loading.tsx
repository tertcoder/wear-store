function Loading() {
  return (
    <div className="flex items-center justify-center gap-1">
      <div className="h-3 w-8 rounded-full border border-bd-main bg-[#FB923C] shadow-shdw-main motion-safe:animate-spin"></div>

      <span className="translate-x-2 text-xl font-medium text-txt-gray">
        Loading...
      </span>
    </div>
  );
}

export default Loading;
