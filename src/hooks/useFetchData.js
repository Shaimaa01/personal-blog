import { useEffect, useState } from "react";

const useFetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json") 
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return data;
};

export default useFetchData;
