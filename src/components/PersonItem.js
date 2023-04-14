import React, { useEffect, useState } from "react";
import "./PersonItem.css"

const PersonItem = ({ item }) => {
const [available,setAvailable]=useState(item.available)

  function handleClick(){
    let teamArray=JSON.parse(localStorage.getItem('key'));
    console.log(teamArray)
    if(teamArray){
      let index=teamArray.findIndex(ob=>ob.domain===item.domain)
      console.log(index);
      console.log(teamArray);
      console.log(item);
      if(index===-1)
      {
        localStorage.setItem("key",JSON.stringify([...teamArray,item]))
        setAvailable(e=>!e);


      }
      else{
        window.alert('same domain already exit');
      }
    }
    else{
      localStorage.setItem("key",JSON.stringify([item]))

    }
    
      
  }
  return (
    <div className="col-sm-4">
      <div className="card my-2">
        <img src={item?.avatar} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">
            {item?.first_name} {item?.last_name}
          </h5>
          <p className="card-text">Email: {item?.email}</p>
          <p className="card-text">Gender: {item?.gender}</p>
          <p className="card-text">Domain: {item.domain}</p>
          <p className="card-text">Available: {available?"Yes":"No"}</p>
          {available && <a href="#" onClick={handleClick} class="btn btn-primary">Add To Team</a>}
        </div>
      </div>
    </div>
  );
};

export default PersonItem;
