"use client";
import React, { useState } from "react";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/20/solid";
import { LinkIcon } from "@heroicons/react/24/solid";

const ShareLinkButton: React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };
  console.log("ShareLinkButton is Rendering");
  return (
    <>
      <button
        className="border flex gap-1 items-center text-slate-500 rounded text-sm px-2 py-1 hover:text-slate-700 hover:bg-orange-100"
        onClick={handleClick}
      >
        {clicked ? (
          <ClipboardDocumentCheckIcon className="w-4 h-4" />
        ) : (
          <LinkIcon className="w-4 h-4" />
        )}
        {clicked ? "Link Copied" : "Share Link"}
      </button>
    </>
  );
};

export default ShareLinkButton;
