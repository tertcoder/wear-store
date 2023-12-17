import Line from "../assets/icons/smll.svg";

function Cart() {
  return (
    <div className="fixed inset-0 z-10 flex translate-y-0 items-end justify-center bg-neutral-400/10 backdrop-blur-[2px]">
      <div className="relative w-full max-w-7xl rounded-t-[2.5rem] border border-bd-main bg-main-bg shadow-shdw-main">
        <img
          src={Line}
          alt="line"
          className="absolute left-1/2 top-4 -translate-x-1/2"
        />

        <div className="flex items-center justify-between border-b border-bd-gray px-16 py-12">
          <h1 className="text-4xl  font-semibold text-txt-main">My Cart</h1>
          <div className="flex items-center gap-6">
            <span className="text-xl font-semibold text-txt-main ">
              Total: $159.8
            </span>
            <button className="rounded-[0.625rem] border border-bd-main bg-btn-main-bg p-4 text-xl font-semibold text-txt-main shadow-shdw-main">
              Checkout
            </button>
          </div>
        </div>
        <div className="space-y-5 px-16 py-8">Cart Items...</div>
      </div>
    </div>
  );
}

export default Cart;
