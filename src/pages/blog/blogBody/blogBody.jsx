import React, { useState, useEffect } from "react";
import BigCard from "./../blogCard/bigCard";
import http from "./../../../service/httpService";
import config from "./../../../config.json";
//https://icopy-server.herokuapp.com/api/upload/post
//http://jsonplaceholder.typicode.com/photos
function BlogBody(props) {
  const [posts, setposts] = useState([]);
  const max = 150;
  useEffect(() => {
    async function getPost() {
      const result = await http.get(config.apiUrl);
      setposts(result.data.data);
      console.log(result.data.data);
    }
    getPost();
  }, []);

  return (
    <div style={{ display: "flex" }} className=" col-sx-12 col-12 col-sm-12">
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
          cardLink="#"
          linkName="Read More"
        />
      ))}
    </div>
  );
}

export default BlogBody;

// image,CardHeader,cardText,cardLink, linkText
