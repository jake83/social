import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Twitter = () => {
  return (
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="jakeyjake83"
      options={{ width: 400, height: 700, tweetLimit: 5 }}
    />
  );
};

export default Twitter;
