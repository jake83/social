import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  const channelId = "UC8h8NJG9gacZ5lAJJvhD0fQ";

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
