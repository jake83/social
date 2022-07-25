import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/youtube" className="item">
        YouTube
      </Link>
      <Link href="/instagram" className="item">
        Instagram
      </Link>
      <Link href="/twitter" className="item">
        Twitter
      </Link>
    </div>
  );
};

export default Header;
