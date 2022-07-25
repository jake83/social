import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        <i className="home icon" />
      </Link>
      <Link href="/youtube" className="item">
        <i className="youtube icon" />
        YouTube
      </Link>
      <Link href="/instagram" className="item">
        <i className="instagram icon" />
        Instagram
      </Link>
      <Link href="/twitter" className="item">
        <i className="twitter icon" />
        Twitter
      </Link>
      <Link href="/profile" className="item">
        <i className="user icon" />
      </Link>
    </div>
  );
};

export default Header;
