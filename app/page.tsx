import React from "react";
import Link from "next/link";
import Heading from "@/components/Heading";
import SubHeading from "@/components/SubHeading";
import { getFeaturedReview } from "@/lib/reviews";

const HomePage: React.FC = async () => {
  const review = await getFeaturedReview();
  interface HeadingProps {
    children: string;
  }
  const myProps: HeadingProps = {
    children: "Indie Gamer",
  };
  const secProps: HeadingProps = {
    children: "Only the best indie games will be reviewed for you.",
  };

  return (
    <>
      <Heading {...myProps} />
      <SubHeading {...secProps} />
      <div className="border rounded bg-white shadow hover:shadow-xl overflow-hidden w-80 sm:w-full">
        <Link
          href={`/reviews/${review.slug}`}
          className="flex flex-col sm:flex-row"
        >
          <img
            className="rounded-t sm:rounded-r-none sm:rounded-l"
            src={review.image}
            alt=""
            width="320"
            height="180"
          />
          <div className="pb-3 text-center font-Orbitron font-semibold sm:px-3">
            {review.title}
          </div>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
