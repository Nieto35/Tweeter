import React from "react";
import Tweet from "./tweet/tweet";
import {feed} from '../source';

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

            iconCommet: < ChatSolid />,
            iconRetweet: < ShareOutline />, 
            iconLike: < HeartOutline /> 

        }
    }

    render() {

        return (
            <div>
                {
                    this.state.tweets.map( tweet => {
                        return (
                            <Tweet 
                                profile={tweet.profile}
                                profileUrl={tweet.imgUrl}
                                username={tweet.username}
                                content={tweet.content}
                                comments={tweet.interaction.comments}
                                retweets={tweet.interaction.retweets}
                                likes={tweet.interaction.likes}

                                iconCommet={this.state.iconCommet}
                                iconRetweet={this.state.iconRetweet}
                                iconLike={this.state.iconLike}

                                />
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Feed;