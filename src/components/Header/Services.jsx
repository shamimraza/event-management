const Services = ({ service }) => {
  const { name, image, price, description } = service;
  console.log(service);
  return (
    <div className="card card-compact w-[450px] h-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-[250px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-xl">Price : {price}</p>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
