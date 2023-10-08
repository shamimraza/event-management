const Event = () => {
  return (
    <div>
      <h2 className="mt-11 text-center text-amber-500 font-bold text-3xl">
        Upcoming Events
      </h2>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-3 mx-auto justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://i.ibb.co/YXSkhGR/digital-marketing.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">New year Celebration</h2>
            <p className="text-white"> Friday Dec 02 2024</p>
            <p className="text-white"> Royal conference hall</p>
            <button className="btn btn-outline btn-secondary text-white">
              Register
            </button>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://i.ibb.co/ByS2mCJ/event-01.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">16th December celebration</h2>
            <p className="text-white"> Friday Dec 16 2024</p>
            <p className="text-white">Raza conference hall</p>
            <button className="btn btn-outline btn-secondary text-white">
              Register
            </button>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://i.ibb.co/SshDWDf/event-02.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">
              Celebration on 26th December
            </h2>
            <p className="text-white"> Friday Dec 26 2024</p>
            <p className="text-white">Mousumi Center house</p>
            <button className="btn btn-outline btn-secondary text-white">
              Register
            </button>
          </div>
        </div>
        <div className="mt-11">
          <iframe
            width="1365"
            height="491"
            src="https://www.youtube.com/embed/lZQ6EF7Ao3g"
            title="TUR-Dubai | TOUR-EVENT"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Event;
