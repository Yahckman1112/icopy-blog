import React, {  useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import http from './../../service/httpService'
import config from './../../config.json'
const Blogs=(props)=> {
    // const params = useParams()
    // id=params.id
    // console.log(id)

    const postId=props.match.params.id
    console.log(postId);
    const [data, setData]= useState([])

    useEffect(()=>{
        async function getData(){
            const result = await http.get(`${config.apiUrl}/${postId}`)
            console.log(result);

        }
        getData()
    },[])


    return (

        <div>
        <h1>{`${postId}`}</h1>
        <h1></h1>
        </div>
    );
}

export default Blogs;