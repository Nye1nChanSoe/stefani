import React from "react";
import styles from "./custom.module.css";

interface Props {
  text: string;
  imageSrc?: string;
}

const HeroAnimatedText = ({ text, imageSrc }: Props) => {
  return (
    <h1
      className={styles.heroText}
      style={
        { "--background-image": `url(${imageSrc})` } as React.CSSProperties
      }
    >
      {text}
    </h1>
  );
};

export default HeroAnimatedText;
