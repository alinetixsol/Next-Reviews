import React, { ReactNode } from "react";

interface ReviewsLayoutProps {
  children: ReactNode;
}

const ReviewLayout: React.FC<ReviewsLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default ReviewLayout;
