import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_title"></div>
      <div className="footer_container">
        <div className="box logo">
          <img src="../logo.jpeg" alt="logo site" />
          <p><strong>GOT WIKI</strong></p>
        </div>
        <div className="box">
          <h3><strong>Fontes</strong></h3>
          <a href="https://gameofthrones.fandom.com/wiki/Wiki_of_Westeros" target="_blank" className="fonte">GOT Fandom</a>
          <a href="https://thronesapi.com" target="_blank" className="fonte">ThronesAPI</a>
          <a href="https://gameofthronesquotes.xyz" target="_blank" className="fonte">GOT Quotes</a>
        </div>
        <div className="box">
          <h3><strong>Links</strong></h3>
          <a href="#">Home</a>
          <a href="#seasons">Temporadas</a>
          <a href="#continentes">Continentes</a>
          <a href="#houses">Casas</a>
          <a href="#characters">Personagens</a>
          <a href="#contact">Contato</a>
        </div>
        <div className="box redes">
          <h3><strong>Redes</strong></h3>
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaYoutube className="icon" />
        </div>
      </div>
    </div>
  );
}
