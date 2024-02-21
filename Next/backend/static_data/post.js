"use client"

import { useState } from "react"

const page = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    async function addUser(){
        let res = await fetch("http://localhost:3000/api/users/", {
            method: "POST",
            body: JSON.stringify({name, age, email})
        });
        let data = await res.json();
        console.log(data)
        if(data.success === true){
          alert("Added");
        } else {
          alert("Error");
        }
    }

  return (
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
      <h1>Add New User</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required/>
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required/>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
      <button onClick={addUser}>ADD</button>
    </div>
  )
}

export default page;