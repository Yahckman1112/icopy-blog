import React, {useState, useEffect} from "react";
import BigCard from "./../../../components/card/bigCard";
import axios from 'axios'

//https://icopy-server.herokuapp.com/api/upload/post
//http://jsonplaceholder.typicode.com/photos
function BlogBody(props) {
const [posts, setposts] = useState([])


    useEffect(()=>{
        async function getPost(){
          const result = await axios.get('https://icopy-server.herokuapp.com/api/upload/post')
          setposts(result.data.data)
            console.log(result.data.data)

        }
        getPost()

    },[])
  


  return (
    <div style={{display:'flex'}}>
      

      
           {posts.map((post,i)=>(

          <BigCard 
          key={i}
          image={post.filename}
          CardHeader={post.title}
          cardText={post.body}
          cardLink='#'
          linkName='Read More'
          /> 
          ))} 
         
        
      
    </div>
  );
}

export default BlogBody;

// image,CardHeader,cardText,cardLink, linkText
