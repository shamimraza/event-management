import { Link } from "react-router-dom";

const Services = ({ service }) => {
  const { name, image, price, description, id } = service;
  return (
    <div className="card card-compact  h-full w-11/12 lg:w-full mx-auto bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-[250px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-xl">Price : {price}</p>
        <p>{description}</p>
        <div className="card-actions justify-center">
          <Link to={`/detail/${id}`}>
            <button className="btn btn-neutral ">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
