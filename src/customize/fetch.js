import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
const useFetch = (url, isCovidData) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);
  useEffect(() => {
    const ourRequest = axios.CancelToken.source();
    async function fetchData() {
      try {
        // get data
        let res = await axios.get(url, {
          cancelToken: ourRequest.token,
        });
        let data = res && res.data ? res.data : [];
        // xử lý data
        if (data && data.length > 0 && isCovidData === true) {
          data.map((item) => {
            item.Date = moment(item.Date).format("DD/MM/YYYY");
            return item;
          });
          data = data.reverse();
        }
        // if data load xog. => set lại data
        setData(data);
        setIsLoading(false);
        setIsError(false);
      } catch (e) {
        if (axios.isCancel(e)) {
          console.log("Request canceled", e.message);
        } else {
          setIsError(true);
          setIsLoading(false);
        }
      }
    }
    // chạy fetchData
    setTimeout(fetchData(), 3000);

    return () => {
      ourRequest.cancel("Canceled!!!!!!");
    };
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetch;
