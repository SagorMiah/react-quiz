import React from "react";

const Content = ({ text, img }) => {
  return (
    <div className="md:w-2/5 w-full mt-10">
      <h1 className="text-4xl text-center md:text-left mb-10 font-semibold">
        {text}
      </h1>
      <img className="h-48 md:h-full mx-auto" src={img} alt="" />
    </div>
  );
};

export default Content;
