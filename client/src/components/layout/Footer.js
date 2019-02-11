import React from "react";

export default function Footer() {
  return (
    <footer className="page-footer font-small blue">
      <a className="navbar-brand" href="#">
        <img
          src="../public/skull.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        MernSkeleton
      </a>
      <a className="footer-copyright text-center py-3">
        &copy; {new Date().getFullYear()} Copyright
      </a>

      <a>Terms</a>
      <a>Privacy</a>
    </footer>
  );
}
