import React from "react";
import Tweet from "./tweet/tweet";
import { feed } from "../source";

import {
  ChatSolid,
  ShareOutline,
  HeartOutline,
} from "@graywolfai/react-heroicons";

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets: feed,

      iconCommet: <ChatSolid />,
      iconRetweet: <ShareOutline />,
      iconLike: <HeartOutline />,
    };
  }

  selectedLike = (index) => {
    //Clonar la lista de objetos
    let tweetsClone = JSON.parse(JSON.stringify(this.state.tweets));
    //Actualizamos el valor de la propiedad selected
    tweetsClone[index].interaction.likes.selected = true;
    tweetsClone[index].interaction.likes.numbers =
      tweetsClone[index].interaction.likes.numbers + 1;

    // console.log(index.profile);


    
    //Actualizamos el estado
    this.setState({ tweets: tweetsClone });
  };

  selectedRetweet = (index) => {
    //Clonar la lista de objetos
    let tweetsClone = JSON.parse(JSON.stringify(this.state.tweets));
    //Actualizamos el valor de la propiedad selected
    tweetsClone[index].interaction.retweets.selected = true;
    tweetsClone[index].interaction.retweets.numbers =
      tweetsClone[index].interaction.retweets.numbers + 1;
    //Actualizamos el estado
    this.setState({ tweets: tweetsClone });
  };

  desSelectedLike = (index) => {
    //Clonar la lista de objetos
    let tweetsClone = JSON.parse(JSON.stringify(this.state.tweets));
    //Actualizamos el valor de la propiedad selected
    tweetsClone[index].interaction.likes.selected = false;
    tweetsClone[index].interaction.likes.numbers =
      tweetsClone[index].interaction.likes.numbers - 1;
    //Actualizamos el estado
    this.setState({ tweets: tweetsClone });
  };

  desSelectedRetweet = (index) => {
    //Clonar la lista de objetos
    let tweetsClone = JSON.parse(JSON.stringify(this.state.tweets));
    //Actualizamos el valor de la propiedad selected
    tweetsClone[index].interaction.retweets.selected = false;
    tweetsClone[index].interaction.retweets.numbers =
      tweetsClone[index].interaction.retweets.numbers - 1;
    //Actualizamos el estado
    this.setState({ tweets: tweetsClone });
  };


  toggleContextMenu = (index) => {
    //Clonar la lista de objetos
    let tweetsClone = JSON.parse(JSON.stringify(this.state.tweets));
    //Actualizamos el valor de la propiedad selected
    tweetsClone[index].showContextM = !tweetsClone[index].showContextM;
    //Actualizamos el estado
    this.setState({tweets: tweetsClone});
}

removeTweet = (index) => {
  //Clonar la lista de objetos
  let tweetsClone = JSON.parse(JSON.stringify(this.state.tweets));
  //Eliminamos el elemento del arreglo
  tweetsClone.splice(index, 1);
  //Actualizamos el estado
  this.setState({tweets: tweetsClone});
}

  render() {
    return (
      <div>
        {console.log(this.state.tweets)}
        {this.state.tweets.map((tweet, index) => {
          return (
            <Tweet
              profile={tweet.profile}
              profileUrl={tweet.imgUrl}
              username={"@" + tweet.username}
              content={tweet.content}
              comments={tweet.interaction.comments > 1000 ? (tweet.interaction.comments / 1000).toFixed(1) + "k" : tweet.interaction.comments}
              retweets={tweet.interaction.retweets.numbers > 1000 ? (tweet.interaction.retweets.numbers / 1000).toFixed(1) + "k" : tweet.interaction.retweets.numbers}
              likes={tweet.interaction.likes.numbers > 1000 ? (tweet.interaction.likes.numbers / 1000 ).toFixed(1)+ "k" : tweet.interaction.likes.numbers }
              showContextM = {tweet.showContextM}
              key={index}
              iconCommet={this.state.iconCommet}
              iconRetweet={this.state.iconRetweet}
              iconLike={this.state.iconLike}

              likesState={tweet.interaction.likes.selected}
              retweetsState={tweet.interaction.retweets.selected}


              selectedFnLike={this.selectedLike}
              selectedFnRetweet={this.selectedRetweet}
              desSelectedFnLike={this.desSelectedLike}
              desSelectedFnRetweet={this.desSelectedRetweet}
              index={index}

              toggleContextMenuFn = {this.toggleContextMenu}
              removeTweetFn = {this.removeTweet}
            />
          );
        })}
      </div>
    );
  }
}

export default Feed;
