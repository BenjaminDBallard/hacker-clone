import { useEffect, useState } from "react";
import axios from "axios";

const bestFetch = () => {
  const [bestData, setBestData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://hn.algolia.com/api/v1/search?tags=front_page"
        );
        setBestData(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    bestData,
    loading,
  };
};

const newFetch = () => {
  const [newData, setNewData] = useState({});
  const [newLoading, setNewLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://hn.algolia.com/api/v1/search_by_date?tags=story"
        );
        setNewData(response);
      } catch (error) {
        console.error(error);
      }
      setNewLoading(false);
    };

    fetchData();
  }, []);

  return {
    newData,
    newLoading,
  };
};

export { bestFetch, newFetch };
