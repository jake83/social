import React from "react";
import Link from "./Link";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui inverted menu">
      <Link href="/" className="item">
        <i className="home icon" />
      </Link>
      <Link href="/youtube" className="item">
        <i className="youtube icon" />
        <span>YouTube</span>
      </Link>
      <Link href="/instagram" className="item">
        <i className="instagram icon" />
        <span>Instagram</span>
      </Link>
      <Link href="/twitter" className="item">
        <i className="twitter icon" />
        <span>Twitter</span>
      </Link>
      <div className="right menu">
        <Link href="/profile" className="item">
          <i className="user icon" />
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
