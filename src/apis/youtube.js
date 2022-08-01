import axios from "axios";

const KEY = "AIzaSyCrOrEPIwqrQPd3DU4308vhjAhckt4QZbE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
