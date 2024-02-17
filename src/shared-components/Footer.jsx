import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
        <footer className='tre-footer'>
        <div className='container flex justify-center gap-2'>
                <div className="tre-footer-col">
                    <img src="/assets/images/logo.png" className="tre-footer-logo" alt="" />
                    <p className="tre-footer-content">Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>
                    <ul className="tre-company-details">
                            <li className="location-icon tre-footet-link">
                                <span className="tre-icon"><i className="ri-map-pin-line"></i></span>
                                51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.
                            </li>
                            <li className="mail-icon tre-footet-link">
                                <span className="tre-icon"><i className="ri-mail-send-fill"></i></span>
                                <Link to="#">example@email.com</Link>
                            </li>   
                            <li className="phone-icon tre-footet-link">
                                <span className="tre-icon"><i className="ri-phone-line"></i></span>
                                <Link to="#"> +91 123 4567890</Link>
                            </li>
                        </ul>
                </div>
                <div className="tre-footer-sm-col">
                    <h4 className="tre-sub-title">Company</h4>
                    <ul className="tre-footer-list">
                        <li><Link to="#">About Us</Link></li>
                        <li><Link to="#">Delivery Information</Link></li>
                        <li><Link to="#">Privacy Policy</Link></li>
                        <li><Link to="#">Terms & Conditions</Link></li>
                        <li><Link to="#">contact Us</Link></li>
                        <li><Link to="#">Support Center</Link></li>
                    </ul>
                </div>
                <div className="tre-footer-sm-col">
                    <h4 className="tre-sub-title">Category</h4>
                    <ul className="tre-footer-list">
                        <li><Link to="#">Fashion & Clothes</Link></li>
                        <li><Link to="#">Dairy & Bakery</Link></li>
                        <li><Link to="#">Fruits & Vegetable</Link></li>
                        <li><Link to="#">Snack & Spice</Link></li>
                        <li><Link to="#">Juice & Drinks</Link></li>
                        <li><Link to="#">Fast Food</Link></li>
                    </ul>
                </div>
                <div className="tre-footer-col">
                    <h4 className="tre-sub-title">Newsletter</h4>
                    <p className="tre-footer-content">Subscribe to get in touch.</p>
                    <input className="tre-search-footer" type="text" placeholder="Search here..."></input>
                    <div className="tre-social-media">
                        <span><Link to="#"><i className="ri-facebook-line"></i></Link></span>
                        <span><Link to="#"><i className="ri-twitter-x-line"></i></Link></span>
                        <span><Link to="#"><i className="ri-dribbble-line"></i></Link></span>
                        <span><Link to="#"><i className="ri-instagram-line"></i></Link></span>
                    </div>
                    <div className="tre-apps">
                            <Link to="#" className="app-img"><img src="/assets/images/android.png" className="adroid" alt="apple"/></Link>
                            <Link to="#" className="app-img"><img src="/assets/images/apple.png" className="apple" alt="apple"/></Link>
                        </div>
                </div>
            </div>
            <div className="tre-copy-rights">
            <p>© <span id="copyright_year">2024</span> <Link to="#">Omar</Link>, All rights reserved.
                </p>
            </div>
    </footer>
  );
}

export default Footer;
