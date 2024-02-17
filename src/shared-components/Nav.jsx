import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
function Nav() {
  const account_items = [
    {
      name: "Register",
      path: "#",
    },
    {
      name: "Checkout",
      path: "#",
    },
    {
      name: "Login",
      path: "#",
    },
  ];

  return (
    <header className="tre-main-header">
      <div className="container  d-flex-cent">
        <Link to="/" className="tre-header-logo">
          <img
            className="tre-header-logo"
            src="/assets/images/logo.png"
            alt="trendy-logo"
          />
        </Link>
        {/*tre-logo*/}

        <form className="tre-header-search">
          <input
            className="search-input"
            type="text"
            placeholder="Search For items..."
          />
          <select className="form-select" aria-label="Default select example">
            <option defaultValue>All Categories</option>
            <option value="1">Mens</option>
            <option value="2">Womens</option>
            <option value="3">Electronics</option>
          </select>
          <Link to="#" className="search-btn tre-icon">
            <i className="ri-search-line" />
          </Link>
        </form>
        {/*tre-search-form*/}

        <ul className="tre-right-bar">
          <li className="tre-bar-item tre-toggle-drop">
            <Link className="nav-link tre-bar-link" to="#">
              <i className="ri-user-3-line" />
              <span>Account</span>
              <ul className="dropdown-menu">
                {account_items.map((item,index) => {
                  return (
                    <li key={index}>
                      <Link className="dropdown-item" to={item.path}>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Link>
          </li>

          <li className="tre-bar-item">
            <Link to="#" className="tre-bar-link">
              <i className="ri-heart-3-line" />
              <span>Wishlist</span>
            </Link>
          </li>

          <li className="tre-bar-item">
            <Cart/>
          </li>
        </ul>
        {/*tre-bar-items*/}
        </div>
    </header>
  );
}

export default Nav;
