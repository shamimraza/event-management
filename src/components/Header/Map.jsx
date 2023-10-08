import { Link } from "react-router-dom";

const Map = () => {
  return (
    <div>
      <h2 className="text-center text-amber-500 text-xl mt-20">NEWS UPDATE</h2>
      <h2 className="text-center text-3xl font-semibold">
        Latest News & events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        {/* card 1 */}
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full h-[200px]"
              src="https://i.ibb.co/YXSkhGR/digital-marketing.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tech Expo 2023</h2>
            <p>
              oin us at the Tech Expo 2023 to explore the latest technological
              innovations and advancements across various industries
            </p>
            <div className="card-actions justify-end">
              <Link to="/login">
                <button className="btn btn-link">See More</button>
              </Link>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full h-[200px]"
              src="https://i.ibb.co/xF3ff0x/1-26656544.jpg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Climate Change Summit</h2>
            <p>
              Attend the Climate Change Summit where global leaders will discuss
              strategies to combat climate change and promote sustainable
              practices
            </p>
            <div className="card-actions justify-end">
              <Link to="/login">
                <button className="btn btn-link">See More</button>
              </Link>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full h-[200px]"
              src="https://i.ibb.co/yN6cwv9/2-7870282d.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Artificial Intelligence Conference</h2>
            <p>
              Discover the future of Artificial Intelligence at the AI
              Conference featuring keynotes, workshops, and demonstrations by
              industry experts.
            </p>
            <div className="card-actions justify-end">
              <Link to="/login">
                <button className="btn btn-link">See More</button>
              </Link>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full h-[200px]"
              src="https://i.ibb.co/yfTGG0f/2-b275a56b.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Health and Wellness Fair</h2>
            <p>
              Participate in the Health and Wellness Fair offering free health
              screenings, fitness demos, and expert advice on leading a healthy
              lifestyle
            </p>
            <div className="card-actions justify-end">
              <Link to="/login">
                <button className="btn btn-link">See More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
