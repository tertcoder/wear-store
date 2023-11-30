import Logo from "../assets/icons/Logo.svg";
import MenuIcon from "../assets/icons/Menu.svg";
import UserIcon from "../assets/images/user.png";

function Header() {
  return (
    <nav className="flex w-full items-center justify-between">
      <div className="border-bd-main bg-btn-gray-bg flex items-center gap-4 rounded-full border p-4">
        <img src={MenuIcon} alt="Menu icon" />
        <span className="text-txt-main font-sans text-lg font-semibold">
          Homee
        </span>
      </div>

      <img src={Logo} alt="WearStore Logo Icon" />
      <div className="border-bd-main bg-btn-gray-bg flex items-center gap-3 rounded-full border ">
        <img
          src={UserIcon}
          alt="User Name"
          className="h-14 w-14 rounded-full"
        />
        <span className="text-txt-main font-sans text-lg font-semibold">
          tertcoder
        </span>
      </div>
    </nav>
  );
}

export default Header;
