import React, { ReactNode } from "react";
interface SubHeadingProps {
  children: ReactNode;
}

const SubHeading: React.FC<SubHeadingProps> = ({ children }) => {
  return (
    <>
      <p className="font-sans pb-3">{children}</p>
    </>
  );
};

export default SubHeading;
