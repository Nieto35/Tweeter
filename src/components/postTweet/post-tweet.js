import React from "react";
import "./styles.css";

const PostTweet = (props) => {
  return (
    <div>
      <div className="t-row t-post-tweet">
        <div className="t-profile-img">
          <img src={props.profileUrl} alt="profile" />
        </div>
        
          <input
            id="btn-input"
            type="text"
            placeholder="Escribe un nuevo tweet"
            value={props.newTweet}
            onChange={props.handleInput}
          />
          <div className="t-post-options">
            <button onClick={props.sendTweet}>Twittear</button>
          </div>
 
      </div>
    </div>
  );
};

export default PostTweet;
