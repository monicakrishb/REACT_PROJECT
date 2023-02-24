import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
export const Placeorder = () => {
    
    const [data,setData]=useState([])
    const getData = async () => {
        try {
          const res = await axios.get("http://localhost:8000/cartdetails");
         
          
        console.log(res.data)
          setData(res.data);
        } catch (err) {
          alert("no action");
        }
      };

      const store=sessionStorage.getItem("useremail");

      useEffect(()=>{
        getData()
      },[])


const arraycd=data.filter((e)=>{if(e.useremail==store){return e}}).map((e)=>e.id)
console.log(arraycd);



const Delete=()=>{
    arraycd.forEach((id)=>  axios.delete("http://localhost:8000/cartdetails/"+id))
}
  return (
    <div>
        <br/>
        <br/>
        <br/>
        <h1>hello</h1>
        <button onClick={Delete}>click</button>
    </div>
  )
}
