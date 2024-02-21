// To access these APIs data, we have to use fetch() function.

import Link from "next/link";

async function getData(){
    
    let res = await fetch("http://localhost:3000/api/products", { cache: 'no-cache' });
    let data = await res.json();
    if(data.success === true){
        return data.result;
    } else {
        return "Data not found";
    }
}

const page = async () => {
    let pro = await getData();
  return (
    <div style={{textAlign: "center"}}>
      <h1>All products</h1>
        {pro.map((e) => {
           return <div style={{backgroundColor: "#EBEBEB", margin: "10px", width: "40%", margin: "auto", padding: "20px", marginTop: "20px"}} key={e._id}>
            <strong>Name: {e.name}</strong>
            <p>Price: {e.price}</p>
            <p>Company: {e.company}</p>
            <p>Color: {e.color}</p>
            <p>Category: {e.category}</p>
            <Link href={`/allproducts/${e._id}`}>EDIT</Link>
            </div>
        })}
    </div>
  )
}

export default page;