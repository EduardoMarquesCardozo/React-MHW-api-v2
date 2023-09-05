import { Wrapper } from "./styles";
import Logo from "../../assets/mhw-logo.png";
const Header = () => {
  return (
    <Wrapper>
      <img src={Logo} alt="Monster hunter world logo" />
      <h1>MH Research Center</h1>
    </Wrapper>
  );
};

export default Header;
