import React from "react";
import Heading from "@/components/Heading";
import SubHeading from "@/components/SubHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const AboutPage: React.FC = () => {
  console.log("[AboutPage] rendering");
  interface HeadingProps {
    children: string;
  }
  const myProps: HeadingProps = {
    children: "About",
  };
  const secProps: HeadingProps = {
    children: "This is an About Page.",
  };
  return (
    <>
      <Heading {...myProps} />
      <SubHeading {...secProps} />
    </>
  );
};

export default AboutPage;
