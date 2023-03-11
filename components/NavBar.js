import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const NavBar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div>
      <div className="nav-bar-flex">
        <p className="beatsbydre">Beats by Dre</p>
        <Link href="/">
          <svg
            className="main-logo"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Beats by Dre icon</title>
            <path d="M12.0098 0a12 12 0 00-3.5996.5527v6.6465A6 6 0 116.0098 12V1.6016a12 12 0 106-1.6016zm.1504 8.4023A3.6 3.6 0 008.4102 12a3.6 3.6 0 003.5996 3.5996 3.6 3.6 0 00.1504-7.1973Z" />
          </svg>
        </Link>
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>

      {showCart && <Cart />}
    </div>
  );
};

export default NavBar;
