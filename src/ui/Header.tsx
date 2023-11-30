import Logo from "../assets/icons/Logo.svg";
import MenuIcon from "../assets/icons/Menu.svg";

function Header() {
  return (
    <nav className="w-full">
      <div className="border-bd-main flex items-center gap-4 rounded-full border p-4">
        <img src={MenuIcon} alt="Menu icon" />
        <span className="font-sans text-lg ">Homee</span>
      </div>

      <img src={Logo} alt="WearStore Logo Icon" />
      <div></div>
    </nav>
  );
}

export default Header;
