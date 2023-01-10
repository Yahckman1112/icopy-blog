import React, { useState, useEffect } from "react";
import BigCard from "./../blogCard/bigCard";
// import http from "./../../../service/httpService";
// import config from "./../../../config.json";
//https://icopy-server.herokuapp.com/api/upload/post
//http://jsonplaceholder.typicode.com/photos
const BlogBody=({posts})=> {

  const max = 150;


  return (

    <div className="row">

      {posts.map((post, i) => (
      <div className=" col-12 col-lg-4 col-md-12 ">
     
          <BigCard
            key={i}
            image={post.Image}
            CardHeader={post.Title}
            // cardText={
            //   post.body.length > max
            //     ? post.body.substring(0, max) + "....."
            //     : post.body
            // }
            // cardLink={`/blog/${post._id}`}
            cardLink={post.NewsLink}
            linkName="Read More"
          />
      </div>
        ))}
    </div>

  );
}

export default BlogBody;

// image,CardHeader,cardText,cardLink, linkText
