import React from "react";
import { Button,TextField } from "@mui/material";
import { useState,map } from "react";

function Find(){
    const[name,setname]=useState("");
    const[dest,setdest]=useState("");
    const[container,setcontainer]=useState([]);

    fetch(`https://streaming-availability.p.rapidapi.com/v2/search/title?title=${name}&country=${dest}&show_type=movie`,{
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4786212398msh92f50d7aa534e7bp10cc45jsn648d61950bcf',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
})
    .then(response =>{return response})
    .then(data=>{ setcontainer({data:data})})
    .catch(err => console.error(err));
    const changehandler=(e)=>{
        e.preventDefault();


    }
    const handle=(e)=>{
        setname(e.target.value);
    }
    const handles=(e)=>{
        setdest(e.target.value);
    }
    return(
        <div>
        <form className="flex items-center justify-center gap-2 mt-8 lg:-ml-20">
        <div className="justify-center items-center">
            <input type="text" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 w-full pl-8 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="make a search" value={name} onChange={handle} required></input>
        </div>
        <Button variant="contained" onClick={changehandler} className="rounded-lg"> Search</Button>
        </form>
        {/* {container.map((item)=>{
            return(
                <p>{item.overview}</p>
            )
        })} */}
        </div>
    )
}
export default Find;