import axios from "axios";

export const fetchArticles = async (query, page) => {
  const { data } = await axios.get(
    `https://hn.algolia.com/api/v1/search?query=${query}&page=${page}`
  );
  return data;
};
