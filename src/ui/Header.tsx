import Logo from "../assets/icons/Logo.svg";
import MenuIcon from "../assets/icons/Menu.svg";
import UserImg from "../assets/images/user.webp";

function Header() {
  return (
    <nav className="flex w-full items-center justify-between">
      <div className="flex items-center  gap-4 rounded-full border border-bd-main bg-btn-gray-bg p-4 shadow-shdw-main">
        <img src={MenuIcon} alt="Menu icon" />
        <span className="font-sans text-lg font-semibold text-txt-main">
          Home
        </span>
      </div>

      <img src={Logo} alt="WearStore Logo Icon" className="w-28" />
      <div className="flex items-center gap-3 rounded-full border border-bd-main bg-btn-gray-bg pr-4 shadow-shdw-main">
        <img src={UserImg} alt="User Name" className="h-14 w-14 rounded-full" />
        <span className="font-sans text-lg font-semibold text-txt-main">
          tertcoder
        </span>
      </div>
    </nav>
  );
}

export default Header;
