import React, { useRef, useState } from "react";
import { Play, X } from "react-hero-icon/solid";
import classes from "../styles/Miniplayer.module.css";
import ReactPlayer from "react-player/youtube";

const MiniPlayer = ({ id, title }) => {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);
  const vidoeURL = `https://www.youtube.com/watch?v=${id}`;

  function toggleMiniPlayer() {
    if (!status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  }

  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={buttonRef}
      onClick={toggleMiniPlayer}
    >
      <span className={`${classes.open}`}>
        <Play className="h-16 w-16" />
      </span>

      <X className={`${classes.close}`} onClick={toggleMiniPlayer} />
      <ReactPlayer
        className={`${classes.player}`}
        url={vidoeURL}
        width="300px"
        height="168px"
        playing={status}
        controls
      />
      <p>{title}</p>
    </div>
  );
};

export default MiniPlayer;
