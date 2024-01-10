import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import Logo from "../assets/icons/Logo.svg";
import MenuIcon from "../assets/icons/Menu.svg";
import UserImg from "../assets/images/user.webp";
import Button from "./Button";
import HomeIcon from "../assets/icons/Home.svg";
import StoreIcon from "../assets/icons/Store.svg";
import CloseIcon from "../assets/icons/Close.svg";
import UserIcon from "../assets/icons/User.svg";
import CartIcon from "../assets/icons/Cart.svg";
import WishlistIcon from "../assets/icons/Wishlist.svg";
import HistoryIcon from "../assets/icons/History.svg";
import LogoutIcon from "../assets/icons/Logout.svg";
import { useDispatch } from "react-redux";
import { setCartIsOpen } from "../store/store";

function Header({ activePage }: { activePage: string }) {
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);
  const [detailIsOpen, setDetailIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <nav className="flex w-full items-center justify-between">
      <button
        onClick={() => setNavMenuIsOpen(true)}
        className="flex items-center gap-4 rounded-full border border-bd-main bg-btn-gray-bg p-4 shadow-shdw-main"
      >
        <img src={MenuIcon} alt="Menu icon" />
        <span className="font-sans text-lg font-semibold text-txt-main">
          {activePage}
        </span>
      </button>
      {navMenuIsOpen && (
        <Menu className="absolute top-10 z-10">
          <button
            onClick={() => setNavMenuIsOpen(false)}
            className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-bd-main bg-btn-gray-bg p-2 shadow-shdw-main"
          >
            <img src={CloseIcon} alt="Close Menu" />
          </button>
          <Button
            ariaLabel="Home"
            onClick={() => {
              navigate("/");
              setNavMenuIsOpen(false);
            }}
            type="small"
          >
            <img src={HomeIcon} alt="Home Icon" />
            <span className="text-lg font-medium">Home</span>
          </Button>
          <Button
            ariaLabel="Store"
            onClick={() => {
              navigate("/store");
              setNavMenuIsOpen(false);
            }}
            type="small"
          >
            <img src={StoreIcon} alt="Store Icon" />
            <span className="text-lg font-medium">Store</span>
          </Button>
        </Menu>
      )}

      <img src={Logo} alt="WearStore Logo Icon" className="w-28" />
      <button
        onClick={() => setDetailIsOpen(true)}
        className="flex items-center gap-4 rounded-full border border-bd-main bg-btn-gray-bg pr-4 shadow-shdw-main"
      >
        <img src={UserImg} alt="User Name" className="h-14 w-14 rounded-full" />
        <span className="font-sans text-lg font-semibold text-txt-main">
          tertcoder
        </span>
      </button>
      {detailIsOpen && (
        <Menu className="absolute right-32 top-10 z-10">
          <button
            onClick={() => setDetailIsOpen(false)}
            className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-bd-main bg-btn-gray-bg p-2 shadow-shdw-main"
          >
            <img src={CloseIcon} alt="Close Menu" />
          </button>
          <Button
            ariaLabel="My Account"
            onClick={() => {
              setDetailIsOpen(false);
            }}
            type="small"
          >
            <img src={UserIcon} alt="Home Icon" />
            <span className="text-lg font-medium">My Account</span>
          </Button>
          <Button
            ariaLabel="My Cart"
            onClick={() => {
              navigate("?myCartIsOpen=true");
              dispatch(setCartIsOpen(true));
              setDetailIsOpen(false);
            }}
            type="small"
          >
            <img src={CartIcon} alt="Cart Icon" />
            <span className="text-lg font-medium">My Cart</span>
          </Button>
          <Button
            ariaLabel="My Wishlist"
            onClick={() => {
              setDetailIsOpen(false);
            }}
            type="small"
          >
            <img src={WishlistIcon} alt="Cart Icon" />
            <span className="text-lg font-medium">My Wishlist</span>
          </Button>
          <Button
            ariaLabel="History"
            onClick={() => {
              setDetailIsOpen(false);
            }}
            type="small"
          >
            <img src={HistoryIcon} alt="History Icon" />
            <span className="text-lg font-medium">History</span>
          </Button>
          <Button
            ariaLabel="Logout"
            onClick={() => {
              setDetailIsOpen(false);
            }}
            type="small"
          >
            <img src={LogoutIcon} alt="Logout Icon" />
            <span className="text-lg font-medium">Logout</span>
          </Button>
        </Menu>
      )}
    </nav>
  );
}

export default Header;
