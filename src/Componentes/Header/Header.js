import React from "react";
import "./Header.css";

import Nav from "../Nav/Nav";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="../logo.jpeg" alt="logo site" />
        <p><strong>GOT WIKI</strong></p>
      </div>
      <Nav></Nav>
    </div>
  );
}
