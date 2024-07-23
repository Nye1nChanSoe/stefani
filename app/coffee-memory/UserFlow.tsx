import React from "react";
import Heading1 from "../components/Heading1";
import Image from "next/image";

import Img from "../../public/images/userflow.jpeg";

interface Props {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const UserFlow = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: Props) => {
  return (
    <section
      style={{
        marginTop: marginTop ? `${marginTop}px` : undefined,
        marginBottom: marginBottom ? `${marginBottom}px` : undefined,
        marginLeft: marginLeft ? `${marginLeft}px` : undefined,
        marginRight: marginRight ? `${marginRight}px` : undefined,
      }}
    >
      <Heading1
        text="User Flow"
        uppercase={true}
        fontSize={80}
        letterSpacing={5}
        marginBottom={60}
      />
      <Image
        src={Img}
        alt="User Flow"
        className="w-full h-full rounded-lg object-contain shrink-0"
      />
    </section>
  );
};

export default UserFlow;
