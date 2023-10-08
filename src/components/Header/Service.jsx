import { useEffect, useState } from "react";
import Services from "./Services";
import Facilities from "./Facilities";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div>
        <h2 className="text-center text-4xl mt-16 font-serif text-amber-400">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-9">
          {services.map((service) => (
            <Services key={service.id} service={service}></Services>
          ))}
        </div>
      </div>
      <Facilities></Facilities>
    </div>
  );
};

export default Service;
