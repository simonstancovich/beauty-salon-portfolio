import { useIsMobile } from "../../hooks/useIsMobile";
import Desktop from "./components/Desktop";
import Mobile from "./components/Mobile";

const NavBar = () => {
  const isMobile = useIsMobile();

  return isMobile ? <Mobile /> : <Desktop />;
};
export default NavBar;
