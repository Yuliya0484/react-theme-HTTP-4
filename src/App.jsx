import { useEffect, useState } from "react";
import { fetchArticles } from "./API/api";
import Loader from "./components/Loader";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // axios
    //   .get("https://hn.algolia.com/api/v1/search")
    //   .then((res) => setArticles(res.data.hits));
    const getArticlesData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { hits } = await fetchArticles("react");
        setIsLoading(false);
        setArticles(hits);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getArticlesData();
  }, []);
  return (
    <div>
      <h2>Http Requests</h2>
      <ul className="list">
        {articles.map((item) => (
          <li className="item" key={item.objectID}>
            <a className="link" target="blank" href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      {isLoading && <Loader />}
      {isError && <h2>Something went wrong! Try again...</h2>}
    </div>
  );
};
export default App;
