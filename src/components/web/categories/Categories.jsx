import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query';

export default function Categories() {
  const getCategories=async()=>{
    const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
    return data;
  }
  const {data,isLoading}=useQuery('webCategories',getCategories);
 
  if (isLoading){
    return<p>...Loading</p>
  }

  return (
    <div className="container">
      <div className="row">
      {data?.categories.length ? data?.categories.map((category)=>
               <div className="col-md-4" key={category._id}>
                <img src={category.image.secure_url}/>
                <h2>{category.name}</h2>
                <p>{category.slug}</p>
               </div>
        ):'<h2>np category found </h2>'}
      </div>
    </div>
  )


}
