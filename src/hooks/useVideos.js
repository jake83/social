import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  const channelId = "UCKpp8KMWBgDvUIOfO9-6dMg";

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        channelId: channelId,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
