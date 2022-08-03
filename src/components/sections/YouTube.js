import React, { useState, useEffect } from "react";
import VideoList from "../VideoList";
import VideoDetail from "../VideoDetail";
import useVideos from "../../hooks/useVideos";

const YouTube = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos();

  // setSelectedVideo(response.data.items[0]);
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTube;
