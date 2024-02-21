async function deleteData(){
    let res = await fetch(`http://localhost:3000/api/users/${userid}` ,{
      method: "DELETE"
    });
    let data = await res.json();
    if(data.success === true){
      alert("User deleted");
    } else {
      alert("Error");
    }
  }