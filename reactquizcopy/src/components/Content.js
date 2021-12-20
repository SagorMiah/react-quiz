import React from "react";

const Content = ({ text, img }) => {
  return (
    <div className="w-2/5 mt-10">
      <h1 className="text-4xl mb-10 font-semibold">{text}</h1>
      <img src={img} alt="" />
    </div>
  );
};

export default Content;
