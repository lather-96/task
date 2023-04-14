import { useState } from "react";

const FilterBar = ({
  genders,
  domains,
  onNameFilter,
  onDomainFilter,
  onAvailableFilter,
  onGenderFilter
}) => {
  const [filters, setFilters] = useState({
    name: "",
    domain: "",
    gender: "",
    available: "",
  });

  const handleInput = (field,event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "name":
        onNameFilter(value);
        break;
      case "domain":
        onDomainFilter(value);
        break;
      case "gender":
        onGenderFilter(value);
        break;
      case "available":
        onAvailableFilter(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom">Search</h4>
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={filters.name}
          onChange={e=>handleInput("name",e)}
        />
      </div>
      <div className="col">
        <h4 className="border-bottom">Filters</h4>
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="domain">Domain</label>
        <select
          className="form-control"
          id="domain"
          onChange={(e) =>handleInput("domain",e)}
        >
          <option value="">Select</option>
          {domains.map((domain) => (
            <option value={domain} key={domain}>
              {domain}
            </option>
          ))}
        </select>
          </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="gender">Gender</label>
        <select
          className="form-control"
          id="gender"
          onChange={(e)=>handleInput("gender",e)}
        >
          <option value="">Select</option>
          {genders.map((gender) => (
            <option value={gender} key={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="available">Available</label>
        <select
          className="form-control"
          id="available"
          value={filters.available}
          onChange={(e)=>handleInput("available",e)}
        >
          <option value="">Select</option>
            <option value="Yes" >
              Yes
            </option>
            <option value="No" >
              No
            </option>
        </select>
          </div>
          <div className="col">
      </div>
      

      
    </div>
  );
};

export default FilterBar;
