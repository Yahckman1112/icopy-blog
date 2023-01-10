import React, {useEffect, useState} from 'react';
import BlogBanner from './blogBanner/blogbanner';
import BlogBody from './blogBody/blogBody';
import config from './../../../src/config.json'
import http from './../../service/httpService'
import axios from 'axios';
function Blog() {
        const [posts, setPosts] = useState([]);

        const options = {
          method: 'GET',
          url: 'https://football98.p.rapidapi.com/premierleague/news',
          headers: {
            'X-RapidAPI-Key': '0a46156023mshc11410caa674925p11bb2bjsn13510e42b370',
            'X-RapidAPI-Host': 'football98.p.rapidapi.com'
          }
        };
        
        useEffect(() => {
          axios.request(options).then(function (response) {
            console.log(response.data);
            setPosts(response.data);
          }).catch(function (error) {
            console.error(error);
          })
        }, []);

        
    return (
        <div>
            < BlogBanner />
            < BlogBody posts={posts}/>
        </div>
    );
}

export default Blog;