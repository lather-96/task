import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import "./App.css";
import PersonItem from "./components/PersonItem";
import data from "./Users.json";
import FilterBar from "./components/FilterBar";


function App() {
  const [allData, setData] = useState(data);
  const [currentPage,setCurrentPage]=useState(1);
  const [postPerPage,setPostPerPage]=useState(20);

    

  const generateGenderDataForDropdown = () => {
    return [...new Set(data.map((item) => item.gender))];
  };
  
  const generateDomainDataForDropdown = () => {
    return [...new Set(data.map((item) => item.domain))];
  };

  const handleFilterName = (name) => {
    const filteredData = data.filter((item) => {
      const fullName = `${item.first_name} ${item.last_name}`;
      if (fullName.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };


  const handleTeamDomain = (domain) => {
    const filteredData = data.filter((item) => {
      if (item.domain === domain && item.available) {
        return item;
      }
    });

    setData(filteredData);
    
  };

  const handleFilterDomain = (domain) => {
    const filteredData = data.filter((item) => {
      if (item.domain === domain) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterAvailable = (available) => {
    console.log(available);
    const filteredData = data.filter((item) => {
      if (available==="Yes" && item.available) {
        return item;
      }
      if(available==="No" && !item.available)
      return item;
    });

    setData(filteredData);
  };


  const handleFilterGender = (gender) => {
    const filteredData = data.filter((item) => {
      if (item.gender === gender) {
        return item;
      }
    });

    setData(filteredData);
  };
const lastPostIndex=currentPage*postPerPage;
const firstPostIndex=lastPostIndex-postPerPage;
const currentPosts=allData.slice(firstPostIndex,lastPostIndex);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <FilterBar
            genders={generateGenderDataForDropdown()}
            domains={generateDomainDataForDropdown()}
            onNameFilter={handleFilterName}
            onDomainFilter={handleFilterDomain}
            onAvailableFilter={handleFilterAvailable}
            onGenderFilter={handleFilterGender}
            onTeamDomain={handleTeamDomain}
          />
        </div>
        <div className="col-sm-9">
          <div className="row mt-5">
            {currentPosts.map((item) => (
              <PersonItem item={item} key={item.id} />
            ))}
          </div>
          <Pagination
                totalPosts={allData.length}
                postsPerPage={postPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
