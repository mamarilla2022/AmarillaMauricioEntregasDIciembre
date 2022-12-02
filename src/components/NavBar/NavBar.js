import "./NavBar.scss";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="nav-primary">
      <img
        src=""
        width="90"
        height="70"
        className="d-inline-block align-top"
        alt="Logo"
      />
      <ul>
        <li>
          <button>INICIO</button>
        </li>
        <li>
          <button>PROMOS</button>
        </li>
        <li>
          <button>COLORES</button>
        </li>
      </ul>
      <CartWidget />
    
    </div>
  );
};

export default NavBar;
