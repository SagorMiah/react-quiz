import React from "react";

const Video = ({ title, noq, id }) => {
  return (
    <div className="bg-white p-3 cursor-pointer rounded-sm">
      <img src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="" />
      <div>
        <h2 className="py-2 text-sm">{title}</h2>
        <div className="flex justify-between pb-2 text-sm">
          <h4>{noq} Questions</h4>
          <span>Total points: {noq * 5}</span>
        </div>
      </div>
    </div>
  );
};

export default Video;
