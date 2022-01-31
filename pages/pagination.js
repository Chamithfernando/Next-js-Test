import React,  { useState, useEffect } from 'react'
import axios from "axios";
import Body from './body';
import { Pagination } from '@nextui-org/react';


const pagination = () => {


const [dataList, setDataList] = useState([]);
const [Page, setPage] = useState(1);
const [count, setCount] = useState(0);
const [currentItem, setcurrentItem] = useState("");
const [pageSize, setpageSize] = useState(3);


useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setDataList(res.data);
      
    };

    fetchPosts();
    
    
  }, []);


    
  return (
    <>
    <div className="App">
      <h2>The JSON below is loaded from an external API!</h2>
      <Body posts={dataList} />
      <Pagination rounded shadow  total={6} initialPage={1}  />
    </div>
    </>
  );
};

export default pagination;
