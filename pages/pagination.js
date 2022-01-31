import React,  { useState, useEffect } from 'react'
import axios from "axios";
import cloneDeep from "lodash/cloneDeep";
import Body from './body';
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";



const pagination = () => {


const [dataList, setDataList] = useState([]);
const countPerPage = 10;
  const [value, setValue] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [collection, setCollection] = React.useState(
    cloneDeep(dataList.slice(0, countPerPage))
  );


useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setDataList(res.data);
      
    };

    fetchPosts();
    
    
    
    
  }, []);



  const updatePage = p => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(dataList.slice(from, to)));
  };



  console.log(collection);

    
  return (
    <>
    <div className="App">
      <h2>The JSON below is loaded from an external API!</h2>

      <Body posts={collection} />
      {/* <Pagination rounded shadow size={countPerPage} initialPage={1} total={dataList.length} page={currentPage} onChange={updatePage} /> */}
      <Pagination
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={dataList.length}
      />
    </div>
    </>
  );
};

export default pagination;
