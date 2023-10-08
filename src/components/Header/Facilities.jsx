import { useEffect, useState } from "react";
import Facility from "./Facility";

const Facilities = () => {
  const [facilities, setFacilities] = useState([]);
  useEffect(() => {
    fetch("features.json")
      .then((res) => res.json())
      .then((data) => setFacilities(data));
  }, []);
  return (
    <div>
      <h2 className="text-center mt-16 text-4xl font-semibold">
        Core Theme <span className="text-amber-500">Features</span>
      </h2>
      <h2 className="text-center mt-3 text-gray-500">
        Course is a complete education solution with all features and
        functionalities. is a complete education solution with all features and
        functionalities.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-5">
        {facilities.map((facility) => (
          <Facility key={facility.id} facility={facility}></Facility>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
