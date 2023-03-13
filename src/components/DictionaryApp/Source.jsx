import React from "react";

// link icon
import { FiExternalLink } from "react-icons/fi";

const Source = ({ url }) => {
  return (
    <>
      {url && (
        <div className="flex items-center space-x-1 border-t-2 border-custom-gray py-5">
          <h2>Source : </h2>
          <a
            href={url}
            className="underline text-custom-gray px-1 flex items-center"
          >
            <span>{url[0]}</span>
            <FiExternalLink />
          </a>
        </div>
      )}
    </>
  );
};

export default Source;
