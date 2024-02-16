import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer flex justify-between flex-wrap p-10 bg-white text-base-content">
      <aside className="basis-[40%]">
        <img src={logo} alt="" className="w-96" />
        <span className="font-bold">
          SpaceTug Pvt Limited.
          <br />
          <p className="font-semibold">All Rights Reserved.</p>
        </span>
      </aside>
      <nav className="basis-[20%] ">
        <header className="footer-title">Company</header>

        <a className="link link-hover">How It works</a>
        <a className="link link-hover">Services</a>
        <a className="link link-hover">Products</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav className="basis-[20%]">
        <header className="footer-title">Connect</header>
        <a className="link link-hover">FaceBook</a>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">LinkedIn</a>
        <a className="link link-hover">Instagram</a>
      </nav>
    </footer>
  );
}

export default Footer;
