import React from "react";
import "./VideoFooter.css";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@rgndunes</h3>
        <p>description</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>song</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <div className="videoFooter__">
        <img
          className="videoFooter__record"
          src="https://static.thenounproject.com/png/934821-200.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default VideoFooter;
