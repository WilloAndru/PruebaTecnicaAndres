import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

function Header() {
  const location = useLocation();

  return (
    <header>
      <h1>Prueba tecnica</h1>
      <Link to={location.pathname === "/" ? "/shoppingCart" : "/"}>
        {location.pathname === "/" ? <FaShoppingCart /> : <FaHome />}
      </Link>
    </header>
  );
}

export default Header;
