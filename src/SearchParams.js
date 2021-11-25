import { useState } from "react";

export const SearchParams = () => {
  const [location, setlocation] = useState("Pune, MH");

  const updateLocation = (e) => {
    setlocation(e.target.value);
  };

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={updateLocation}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
