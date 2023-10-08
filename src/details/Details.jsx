import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const idPint = parseInt(id);
  const detail = details.find((detail) => detail.id === idPint);
  const { image, name, description } = detail;
  console.log(detail);
  return (
    <div>
      <img className="mx-auto w-full h-[600px]" src={image} alt="" />
      <h2 className="mt-6 font-bold text-4xl">{name}</h2>
      <p className="mt-4">{description}</p>
    </div>
  );
};

export default Details;
