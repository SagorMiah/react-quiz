import React from "react";
import play from "../images/play.png";
import { Play } from "react-hero-icon/solid";

const MiniPlayer = () => {
  return (
    <div className="absolute right-3 bottom-24 cursor-pointer">
      <div>
        <Play className="h-16 w-16" />
      </div>
    </div>
  );
};

export default MiniPlayer;
