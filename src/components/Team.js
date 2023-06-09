import React, { useState } from "react";
import "./PersonItem.css"

const PersonItem = () => {
const [item,setItem]=useState([]);
setItem(JSON.parse(localStorage.getItem('key')));
  
const team=item.map((item)=>{
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
          <p className="card-text">Available: {item.available?"Yes":"No"}</p>
        </div>
      </div>
    </div>
}) 
      
  return (
    {team}
  );
};

export default PersonItem;
