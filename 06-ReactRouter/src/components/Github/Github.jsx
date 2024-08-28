import React from 'react'
import { useState, useEffect, } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    // const [data , setData] =  useState([]);
    // useEffect(() => {
    //  fetch('http://api.github.com/users/hiteshchoudhary')
    //  .then(response=>response.json())
    //  .then(data=>{
    //     console.log(data);
    //     setData(data);
    //  })
    // }, [])
    
  return (
    <div className='text-white bg-gray-600 text-3xl p-4'>Github Followers : {data.followers} </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
 const response =  await fetch('http://api.github.com/users/hiteshchoudhary');
 return response.json;
}