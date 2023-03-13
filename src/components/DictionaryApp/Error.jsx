import React from "react";

import { BsExclamationCircleFill } from "react-icons/bs";

const Error = () => {
  return (
    <div className="flex items-center justify-center flex-col text-red-500 space-y-5 lg:mt-48 md:mt-40 mt-36">
      <BsExclamationCircleFill className="text-5xl" />
      <p className="text-3xl text-center">No Definitions Found</p>
    </div>
  );
};

export default Error;
