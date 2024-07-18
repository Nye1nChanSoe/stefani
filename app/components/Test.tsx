import React from "react";
import styles from "../example.module.css";
import S from "../../public/images/S.jpeg";

interface Props {
  text: string;
}

const Test = ({ text }: Props) => {
  return (
    <h1
      className={styles.heroText}
      style={{ "--background-image": `url(${S.src})` } as React.CSSProperties}
    >
      {text}
    </h1>
  );
};

export default Test;
