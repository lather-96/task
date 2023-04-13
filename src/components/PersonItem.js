import React from "react";
import "./PersonItem.css"

const PersonItem = ({ item }) => {
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
          <p className="card-text">Available: {item.available?"Yes":"No"}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonItem;
