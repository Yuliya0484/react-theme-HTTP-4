import { useEffect, useState } from "react";
import { fetchArticles } from "./API/api";
import Loader from "./components/Loader";
import Articles from "./components/Articles/Articles";
import SearchBar from "./components/SearchBar/SearchBar";
import toast from "react-hot-toast";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // axios
    //   .get("https://hn.algolia.com/api/v1/search")
    //   .then((res) => setArticles(res.data.hits));
    const getArticlesData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { hits } = await fetchArticles(query, page);
        setIsLoading(false);
        setArticles((prev) => [...prev, ...hits]);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getArticlesData();
  }, [query, page]);
  const handleChangePage = () => {
    toast.success(`Page chanched to: ${page + 1}`);
    setPage((prev) => prev + 1);
  };
  const handleChangeQuery = (newQuery) => {
    if (newQuery === query) {
      toast.error("Please change query!");
      return;
    }
    setQuery(newQuery);
    setArticles([]);
    setPage(0);
  };
  return (
    <div className="main-box">
      <h2>Http Requests</h2>
      <h3>News List</h3>
      <SearchBar onSearchChanged={handleChangeQuery} />
      {articles.length > 0 && <Articles articles={articles} />}
      <button className="load-btn" onClick={handleChangePage}>
        Load More
      </button>
      {isLoading && <Loader />}
      {isError && <h2>Something went wrong! Try again...</h2>}
    </div>
  );
};
export default App;
