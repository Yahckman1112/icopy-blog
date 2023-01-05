import React, { useState, useEffect } from "react";
import BigCard from "./../blogCard/bigCard";
// import http from "./../../../service/httpService";
// import config from "./../../../config.json";
//https://icopy-server.herokuapp.com/api/upload/post
//http://jsonplaceholder.typicode.com/photos
const BlogBody=({posts})=> {

  const max = 150;


  return (
    <div className=" col-sx-12 col-12 col-sm-12">
      {posts.map((post, i) => (
        <BigCard
          key={i}
          image={post.filename}
          CardHeader={post.title}
          cardText={
            post.body.length > max
              ? post.body.substring(0, max) + "....."
              : post.body
          }
          cardLink={`/blog/${post._id}`}
          linkName="Read More"
        />
      ))}
    </div>
  );
}

export default BlogBody;

// image,CardHeader,cardText,cardLink, linkText
