import React from "react";
import { FaMapMarkerAlt , FaHeadphonesAlt , FaEnvelopeOpenText} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#2e2e2e] text-white py-20">
        <div>
          <img  className="w-2/4" src="https://i.ibb.co/d6jRFLd/logo-2.png" alt="" />
          <p>STORE INFORMATION</p>
            <div className="flex gap-3">
                <p className="text-2xl"><FaMapMarkerAlt></FaMapMarkerAlt></p>
                <p>Toy Car Store <br />
                48 Boulevard Jourdan, Paris, <br />
                United States</p>
            </div>
            <div className="flex items-center gap-3">
                <p className="text-2xl"><FaHeadphonesAlt></FaHeadphonesAlt></p>
                <p>+1234567890</p>
            </div>
            <div className="flex items-center gap-3">
                <p className="text-2xl"><FaEnvelopeOpenText></FaEnvelopeOpenText></p>
                <p>Sales@Yourshop.Com</p>
            </div>
            <input className="py-2 my-2 px-2 bg-black rounded" placeholder="your email" type="email" name="email" id="" />
            <button className="btn rounded-none w-32 hover:text-white bg-white text-black">Subscribe</button>
        </div>
        <div>
          <span className="footer-title">PRODUCTS</span>
          <a className="link link-hover">Prices Drop</a>
          <a className="link link-hover">New Products</a>
          <a className="link link-hover">Best Sales</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Sitemap</a>
        </div>
        <div>
          <span className="footer-title">OUR COMPANY</span>
          <a className="link link-hover">Delivery</a>
          <a className="link link-hover">Legal Notice</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Secure Payment</a>
          <a className="link link-hover">Stores</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
