import React, { useState } from "react";
import axios from "axios";
const App1 = () => {
  const [Data, setData] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const limit = 10;

  const fetchData = async (page) => {
    setLoading(true);
    const res = axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    );
  };
  return <></>;
};

export default App1;
