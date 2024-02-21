"use client"

import { useState } from "react"


async function fetchDetails(id){
    let res = await fetch(`http://localhost:3000/api/users/${id}`);
    let da = await res.json();
    return da.success === true ? da.result[0] : false;
} 

const page = () => {
    const [userid, setUserid] = useState(0);
    const [data, setData] = useState({});
    
    function check(e){
        setUserid(e.target.value);
    }
    
    async function get(){
        let details = await fetchDetails(userid);
        console.log(details);
        setData(details);
    }

  return (
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
        {data == false ? <p>User not found</p> : <>
      <p>Name : {data.name}</p>
      <p>Age : {data.age}</p>
      <p>Email : {data.email}</p>
      <p>Name : {data.name}</p>
      </>
    }
      <input type="text" placeholder="id of user" onChange={check} required/>
      <button onClick={() => get()}>GET</button>
    </div>
  )
}

export default page;