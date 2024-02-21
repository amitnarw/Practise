async function change(){
      let res = await fetch(`http://localhost:3000/api/users/${userid}`, {
        method: "PUT",
        body: JSON.stringify({name, age, email})
      })

      let data = await res.json();
      if(data.success === true){
        alert("data changed");
      } else {
        alert("Error");
      }
    }