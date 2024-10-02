import React from "react";
import styles from "./Button.module.css";

function Button({ primary, tamanho, children, mode }) {
  const buttonClass = [
    styles.button,
    primary ? styles.primary : styles.secundary,
    styles[tamanho],
  ].join(" ");

  return <button type={mode} className={buttonClass}>{children}</button>;
}

export default Button;