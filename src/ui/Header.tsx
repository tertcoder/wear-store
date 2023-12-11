import Menu from "./Menu";
import Logo from "../assets/icons/Logo.svg";
import MenuIcon from "../assets/icons/Menu.svg";
import UserImg from "../assets/images/user.webp";
import Button from "./Button";
import HomeIcon from "../assets/icons/Home.svg";
import StoreIcon from "../assets/icons/Store.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [activePage, setActivePage] = useState("Home");
  const navigate = useNavigate();
  // function navigateToPage(){
  //   setActivePage()
  //   if(activePage==="Home"){
  //     navigate('/');
  //   }
  // }
  function element(e: MouseEvent) {
    e.preventDefault();
    const active: string = e.target.closest(".btn").ariaLabel;
    setActivePage(active);
    if (active === "Home") navigate("/");
    if (active === "Store") navigate("/store");
  }
  return (
    <nav className="flex w-full items-center justify-between">
      <button className="flex items-center gap-4 rounded-full border-2 border-bd-main bg-btn-gray-bg p-4 shadow-shdw-main">
        <img src={MenuIcon} alt="Menu icon" />
        <span className="font-sans text-lg font-semibold text-txt-main">
          {activePage}
        </span>
      </button>
      <Menu className="top-40">
        <Button
          ariaLabel="Home"
          onClick={(e: MouseEvent) => element(e)}
          type="small"
        >
          <img src={HomeIcon} alt="Home Icon" />
          <span>Home</span>
        </Button>
        <Button
          ariaLabel="Store"
          onClick={(e: MouseEvent) => element(e)}
          type="small"
        >
          <img src={StoreIcon} alt="Store Icon" />
          <span>Store</span>
        </Button>
      </Menu>

      <img src={Logo} alt="WearStore Logo Icon" className="w-28" />
      <button className="flex items-center gap-4 rounded-full border-2 border-bd-main bg-btn-gray-bg pr-4 shadow-shdw-main">
        <img src={UserImg} alt="User Name" className="h-14 w-14 rounded-full" />
        <span className="font-sans text-lg font-semibold text-txt-main">
          tertcoder
        </span>
      </button>
    </nav>
  );
}

export default Header;
