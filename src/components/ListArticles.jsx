import { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import ListArticle from "./css/ListArticle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDownAZ } from "@fortawesome/free-solid-svg-icons";
import { newFetch } from "../hooks/useFetch";

export default function ListArticles({ bestData, newData, searchTerm }) {
  const bestIcon = <FontAwesomeIcon icon={faStar} />;
  const newIcon = <FontAwesomeIcon icon={faArrowUp} />;
  const abcIcon = <FontAwesomeIcon icon={faArrowDownAZ} />;

  const [bestPosts, setBestPosts] = useState([]);
  const [newPosts, setNewPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState(bestData);

  useEffect(() => {
    let bestPosts = bestData.hits.map((p) => p);
    setBestPosts(bestPosts);
    setPosts(bestPosts);
    let newPosts = newData.hits.map((a) => a);
    setNewPosts(newPosts);
  }, []);

  const [aisActive, asetActive] = useState(true);
  const [bisActive, bsetActive] = useState(false);
  const [cisActive, csetActive] = useState(false);

  const handleToggle = (btn) => {
    if (btn === "a") {
      asetActive(true);
      bsetActive(false);
      csetActive(false);
    } else if (btn === "b") {
      asetActive(false);
      bsetActive(true);
      csetActive(false);
    } else {
      asetActive(false);
      bsetActive(false);
      csetActive(true);
    }
  };

  const sortBest = (e) => {
    setPosts(bestPosts);
    setData(bestData);
    // const sortBestPosts = [...posts];
    // sortBestPosts.sort((a, b) => (a.points < b.points ? 1 : -1));
    // setPosts(sortBestPosts);
    handleToggle("a");
  };

  const sortNew = (e) => {
    setPosts(newPosts);
    setData(newData);
    // const sortNewPosts = [...posts];
    // sortNewPosts.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
    // setPosts(sortNewPosts);
    // handleToggle("b");
    // setLoadedData(newData);
    // let posts = loadedData.hits.map((p) => p);
    // setPosts(posts);
    // setPosts(sortNewPosts);
    handleToggle("b");
  };

  const sortAbc = (e) => {
    const sortAbcPosts = [...posts];
    sortAbcPosts.sort((a, b) => (a.title > b.title ? 1 : -1));
    setPosts(sortAbcPosts);
    handleToggle("c");
  };
  return (
    <div className="list-article">
      <section className="top-filter">
        <div className="drop-filter">
          <button
            name="best"
            onClick={(e) => sortBest(e)}
            className={`buttonF button-${aisActive ? "danger" : "success"}`}
          >
            {bestIcon} Best
          </button>
          <button
            name="new"
            onClick={(e) => sortNew(e)}
            className={`buttonF button-${bisActive ? "danger" : "success"}`}
          >
            {newIcon} New
          </button>
          <button
            name="abc"
            onClick={(e) => sortAbc(e)}
            className={`buttonF button-${cisActive ? "danger" : "success"}`}
          >
            {abcIcon} Abc
          </button>
        </div>
        <div className="responce-data">
          <p>
            {data.nbHits} results ({data.serverTimeMS / 1000} seconds)
          </p>
        </div>
      </section>

      {posts
        .filter((post) => {
          if (searchTerm == "") {
            return post;
          } else if (
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return post;
          }
        })
        .map((post, index) => {
          return (
            <div key={index}>
              <SearchResult
                createdAt={post.created_at}
                author={post.author}
                title={post.title}
                url={post.url}
                points={post.points}
                numComments={post.num_comments}
              />
            </div>
          );
        })}
    </div>
  );
}
