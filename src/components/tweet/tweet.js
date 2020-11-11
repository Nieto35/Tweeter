import React from "react";
import "./styles.css";
import Icon from "../icon/icon";

class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet-container">
        <div className="row">
          <div className="c1">
            <img src={this.props.profileUrl} alt="profile" />
          </div>
          <div className="c2">
            <h6>{this.props.profile}</h6>
            <h6>{this.props.username}</h6>
          </div>
          <div className="c3"></div>
        </div>
        <div className="row">
          <p className="content">{this.props.content}</p>
        </div>
        <div className="c3">
          <div className="c4">
            
            <Icon source={this.props.iconCommet} text={this.props.comments} />
          </div>

          <div
            className={`c4 ${this.props.retweetsState && "selected"}`}
            onClick={
              this.props.retweetsState
                ? () => this.props.desSelectedFnRetweet(this.props.index)
                : () => this.props.selectedFnRetweet(this.props.index)
            }
          >
            
            <Icon source={this.props.iconRetweet} text={this.props.retweets} />
          </div>

          <div
            className={`c4 ${this.props.likesState && "selected"}`}
            onClick={
              this.props.likesState
                ? () => this.props.desSelectedFnLike(this.props.index)
                : () => this.props.selectedFnLike(this.props.index)
            }
          >
            
            <Icon source={this.props.iconLike} text={this.props.likes} />
          </div>
        </div>
      </div>
    );
  }
}

export default Tweet;

// https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg
//@TwitterSafety
//Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus et enim sodales congue sed ac ante. Maecenas tincidunt tortor vel lorem semper vestibulum. Phasellus placerat arcu ac dui ultricies, sed tempor dolor rhoncus. Cras id leo sem.
