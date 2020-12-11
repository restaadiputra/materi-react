import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get(url)
      .then(({ data }) => {
        setLoading(false);
        setResponse(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [url]);

  return { response, loading, error };
};

export default useFetch;
