import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import http from "./../../service/httpService";
import config from "./../../config.json";
import BlogsBody from "./blogsbody/blogsBody";
import Footer from './../../components/footer/footer';

const Blogs = (props) => {
  const params = useParams();
  const id = params.id;

  const [datas, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await http.get(`${config.apiUrl}/${id}`);
      setData(result.data.data);
     
    }
    getData();
  }, []);

  return (
    <div>
      <BlogsBody data={datas} />
      < Footer />
    </div>
  );
};

export default Blogs;
