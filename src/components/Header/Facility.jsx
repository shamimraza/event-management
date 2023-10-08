const Facility = ({ facility }) => {
  const { name, image, description } = facility;
  console.log(facility);
  return (
    <div className="card   shadow-xl">
      <figure>
        <img className="hover: 'bg-black'" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Facility;
