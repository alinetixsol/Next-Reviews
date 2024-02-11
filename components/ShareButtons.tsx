"use client";
import React from "react";
import ShareLinkButton from "./ShareLinkButton";

const ShareButtons: React.FC = () => {
  console.log("ShareButtons Rendering");
  return (
    <>
      <div>
        <ShareLinkButton /> | [Twitter] | [Facebook]
      </div>
    </>
  );
};

export default ShareButtons;
