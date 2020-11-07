import React from "react";
import Tweet from "./tweet/tweet";
import {feed} from '../source';

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: feed
        }
    }

    render() {

        const {profile, profileName, username, content, display} = {
            profile: "",
            profileName: "",
            username: "",
            content: "",
            display: ""
        };

        return (
            <div>
                {
                    this.state.tweets.map( tweet => {
                        return (
                            <Tweet
                                profile={tweet.profile}
<<<<<<< HEAD
                                profileUrl={tweet.profileUrl}
=======
                                profileUrl={tweet.imgUrl}
>>>>>>> 352349dcccdeb0b1f436ba70f5480eb942620963
                                username={tweet.username}
                                content={tweet.content}/>
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Feed;