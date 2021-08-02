import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ pageTitle, pageHeading, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageHeading}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
