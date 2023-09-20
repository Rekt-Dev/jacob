import LOGO from "../assets/logo.svg";
const Header: React.FC = () => {
    return (
      <div>
        <header>
          <img src={LOGO} alt="Logo" />
        </header>
        {/* The rest of your component content */}
      </div>
    );
  };
  
  export default Header;