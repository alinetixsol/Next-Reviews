import React, { ReactNode } from "react";
import { pacifico } from "@/app/fonts";
interface HeadingProps {
  children: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <>
      <h1 className="font-bold text-2xl pb-3 font-Orbitron">{children}</h1>
    </>
  );
};

export default Heading;
