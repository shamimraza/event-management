const Facility = ({ facility }) => {
  const { name, image, description } = facility;
  return (
    <div className="card shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Facility;
