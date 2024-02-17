import React from "react";
import { Link } from "react-router-dom";
import ProductModal from "./ProductModal";

function ProductCard({ product, className }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
    document.querySelector("body").classList.add("tre-opened-modal");
  };

  return (
    <>
      <div
        className={`tre-product-padding ${className}`}
        data-category={product.category}
      >
        <div className={`tre-product-contanier`}>
            <div className="tre-product-image">
              <img src={product.image} alt={product.title} />
              <div className="tre-pro-actions">
                <Link
                  className="tre-show-product"
                  title="show"
                  onClick={handleOpen}
                >
                  <i className="ri-eye-line" />
                </Link>
                <Link
                  to="#"
                  title="Add To Cart"
                  className="tre-addcart-btn tre-shopping-bag"
                  data-id={product.id}
                >
                  <i className="ri-shopping-cart-line"></i>
                </Link>
                <Link to="#" className="tre-btn-group compare" title="Compare">
                  <i className="ri-layout-right-2-line"></i>
                </Link>
                <Link
                  to="#"
                  className="tre-btn-group wishlist"
                  title="Wishlist"
                >
                  <i className="ri-heart-line" />
                </Link>
              </div>
            </div>
            <div className="tre-product-content">
              <div className="tre-product-info">
                <span className="tre-product-cat">{product.category}</span>
              </div>
              <h4 className="tre-product-title">{product.title}</h4>
              <p className="tre-product-desc">{product.description}</p>
              <div className="tre-product-details">
                <span className="tre-product-price">${product.price}</span>
                <ul className="tre-size-list">
                  <li className="tre-product-sz d-flex-cent">M</li>
                  <li className="tre-product-sz d-flex-cent">L</li>
                  <li className="tre-product-sz d-flex-cent">XL</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
      <ProductModal open={open} setOpen={setOpen} product={product} />
    </>
  );
}

export default ProductCard;
