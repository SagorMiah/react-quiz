import React, { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "react-hero-icon/solid";

const ProgressBar = ({ next, prev, submit, progress }) => {
  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef();

  function toggleTooltip() {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${progress}%)`;
      tooltipRef.current.style.display = "block";
    }
  }

  return (
    <div className="progress items-center rounded-lg">
      <button onClick={prev}>
        <ArrowLeft className="h-6" />
      </button>
      <div className="w-4/5">
        <div
          onMouseOver={toggleTooltip}
          onMouseOut={toggleTooltip}
          className="w-full h-1 bg-gray-300 relative cursor-pointer"
        >
          <div
            id="tooltip"
            ref={tooltipRef}
            className="absolute -top-14 bg-black text-white py-2 px-4 rounded-lg font-bold text-sm hidden transform transition duration-300"
          >
            {progress}%Complete
          </div>
          <div
            style={{ width: `${progress}%` }}
            className="absolute top-0 left-0 h-full bg-black"
          ></div>
        </div>
      </div>
      <button
        className="flex items-center font-semibold text-sm"
        onClick={progress === 100 ? submit : next}
      >
        {progress === 100 ? "Submit" : "NEXT QUESTION"}
        <ArrowRight className="h-6 ml-2" />
      </button>
    </div>
  );
};

export default ProgressBar;
