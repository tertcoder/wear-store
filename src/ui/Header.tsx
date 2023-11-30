import Logo from "../assets/icons/Logo.svg";
import MenuIcon from "../assets/icons/Menu.svg";
import UserImg from "../assets/images/user.png";

function Header() {
  return (
    <nav className="flex w-full items-center justify-between border">
      <div className="border-bd-main shadow-shdw-main  bg-btn-gray-bg flex items-center gap-4 rounded-full border p-4">
        <img src={MenuIcon} alt="Menu icon" />
        <span className="text-txt-main font-sans text-lg font-semibold">
          Homee
        </span>
      </div>

      <img src={Logo} alt="WearStore Logo Icon" className="w-28" />
      <div className="border-bd-main bg-btn-gray-bg shadow-shdw-main flex items-center gap-3 rounded-full border pr-4">
        <img src={UserImg} alt="User Name" className="h-14 w-14 rounded-full" />
        <span className="text-txt-main font-sans text-lg font-semibold">
          tertcoder
        </span>
      </div>
    </nav>
  );
}

export default Header;
