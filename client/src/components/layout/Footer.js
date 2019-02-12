import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer font-small blue">
      <Link className="navbar-brand" to="#">
        <img
          src="../public/skull.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        MernSkeleton
      </Link>
      <Link className="footer-copyright text-center py-3">
        &copy; {new Date().getFullYear()} Copyright
      </Link>

      <Link>Terms</Link>
      <Link>Privacy</Link>
    </footer>
  );
};
export default Footer;
