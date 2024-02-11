import React from "react";
import Heading from "@/components/Heading";
import { getReviews, getStaticPages } from "@/lib/reviews";
import ShareLinkButton from "@/components/ShareLinkButton";

export async function generateStaticParams() {
  const slugs = await getStaticPages();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReviews(slug);
  return {
    title: review.title,
  };
}
const ReviewPage: React.FC<any> = async ({ params: { slug } }) => {
  const review = await getReviews(slug);
  return (
    <>
      <Heading>{review.title}</Heading>
      <div className="flex flex-row gap-3 items-baseline pb-2">
        <div>{review.date}</div>
        <ShareLinkButton />
      </div>
      <img
        src={review.image}
        alt=""
        width="640"
        height="360"
        className="rounded mb-3"
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="prose prose-slate max-w-screen-sm"
      />
    </>
  );
};

export default ReviewPage;
