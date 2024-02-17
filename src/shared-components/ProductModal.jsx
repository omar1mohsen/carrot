import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Fade } from "@mui/material";
import Btn from "./Btn";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function ProductModal({ open, setOpen, product }) {
  const handleClose = () => {
    setOpen(false);

    setTimeout(() => {
      document.querySelector("body").classList.remove("tre-opened-modal");
    }, 500);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
    >
      <Fade in={open}>
        <Box sx={style} className="tre-modal-box">
          <div className="tre-modal-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="tre-modal-content">
            <h2 id="tre-modal-title">{product.title}</h2>
            <p>{product.description}</p>
            <hr />
            <div className="tre-review-star">
              <div className="tre-star">
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
              </div>
              <p>( 75 Review )</p>
            </div>

            <div className="tre-product-details">
              <span className="tre-product-price tre-modal-price">${product.price}</span>
              <ul className="tre-size-list">
                <li className="tre-product-sz d-flex-cent">M</li>
                <li className="tre-product-sz d-flex-cent">L</li>
                <li className="tre-product-sz d-flex-cent">XL</li>
              </ul>
            </div>
            <Btn
              className="tre-addcart-btn tre-modal-btn"
              title="Add to cart"
              id={product.id}
            ></Btn>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
