import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../context/shopContextProvider";
import "./navbar.css";

const Navbar = () => {
  const { TotalCartQuantity } = useContext(ShopContext);
  const TotalcartItem = TotalCartQuantity();
  return (
    <div className="navbar">
      <div id="logo" className="links">
        <Link to="/">Phoenix Store</Link>
      </div>
      <div className="links">
        <button>
          <Link to="/cart">
            <ShoppingCart size={40} />
          </Link>
          {TotalcartItem > 0 && <>({TotalcartItem})</>}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
