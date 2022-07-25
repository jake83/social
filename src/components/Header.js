import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        <i class="home icon"></i>
      </Link>
      <Link href="/youtube" className="item">
        YouTube
      </Link>
      <Link href="/instagram" className="item">
        Instagram
      </Link>
      <Link href="/twitter" className="item">
        Twitter
      </Link>
      <Link href="/profile" className="item">
        <i class="user icon"></i>
      </Link>
    </div>
  );
};

export default Header;
