import React, {useEffect, useState} from 'react';
import BlogBanner from './blogBanner/blogbanner';
import BlogBody from './blogBody/blogBody';
import config from './../../../src/config.json'
import http from './../../service/httpService'
function Blog() {
        const [posts, setposts] = useState([]);
        useEffect(() => {
          async function getPost() {
            const result = await http.get(`${config.apiUrl}`);
            setposts(result.data.data);
            console.log(result.data.data); 
          }
          getPost();
        }, []);

        
    return (
        <div>
            < BlogBanner />
            < BlogBody posts={posts}/>
        </div>
    );
}

export default Blog;