//import Logo from "../assets/JacobLogo.png";
import smallerLogo from "../assets/smallerLogo.svg";
import SiteMenu from "./SiteMenu";
import UserMenu from "./UserMenu";
import Logo from "./Logo";
const Header: React.FC = () => {
    return (
      <div className=" Header">
        <UserMenu />
        <Logo />
<SiteMenu />
      </div>
    );
  };
  
  export default Header;