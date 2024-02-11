import React from "react";
import Link from "next/link";
import Heading from "@/components/Heading";
import { getAllFiles } from "@/lib/reviews";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews",
};

const ReviewsPage: React.FC = async () => {
  const reviews = await getAllFiles();
  return (
    <>
      <Heading>Reviews</Heading>
      <nav>
        <ul className="flex flex-row flex-wrap gap-3">
          {reviews.map((review) => (
            <li
              key={review.slug}
              className="border w-80 rounded bg-white shadow hover:shadow-xl overflow-hidden"
            >
              <Link href={`/reviews/${review.slug}`}>
                <img src={review.image} alt="" width="320" height="180" />
                <div className="pb-3 text-center font-Orbitron font-semibold">
                  {review.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default ReviewsPage;
