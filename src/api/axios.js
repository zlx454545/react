import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "ec6ce60146c636ef8da72076720eec2c",
    language: "ko-KR",
  },
});

export default instance;
