import { IoIosMan } from "react-icons/io";

const Speakers = () => {
  return (
    <div>
      <div>
        <h2 className="flex items-center text-4xl font-semibold mt-10 ">
          <IoIosMan className="text-5xl"></IoIosMan> EVENT SPEAKERS /{" "}
          <span className="text-amber-500">meet with graters</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 mx-auto mt-24">
        {/* card1 */}
        <div className="card  bg-base-100 ">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/sQFb57F/speaker-3.jpg"
              alt="Shoes"
              className="rounded-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">JACK</h2>
            <p className="font-semibold text-amber-500">web Developer</p>
            <p>
              A hands-on intensive program covering full-stack web development
              technologies and tools.
            </p>
          </div>
        </div>
        {/* card2 */}
        <div className="card  bg-base-100 ">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/4gFrW1F/speaker-2-1.jpg"
              alt="Shoes"
              className="rounded-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">KIELLY</h2>
            <p className="font-semibold text-amber-500">
              Multimedia Communication
            </p>
            <p>
              Learn effective communication skills in multiple languages with
              this specialized course.
            </p>
          </div>
        </div>
        {/* card3 */}
        <div className="card  bg-base-100 ">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/9vZB44D/speaker-4.jpg"
              alt="Shoes"
              className="rounded-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">ALBART</h2>
            <p className="font-semibold text-amber-500">
              Full-Stack Web Developer
            </p>
            <p>
              A hands-on intensive program covering full-stack web development
              technologies and tools.
            </p>
          </div>
        </div>
        {/* card1 */}
        <div className="card  bg-base-100 ">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/m8j3hhm/speaker-1.jpg"
              alt="Shoes"
              className="rounded-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">EMMA</h2>
            <p className="font-semibold text-amber-500">Digital Marketing</p>
            <p>
              An in-depth masterclass on digital marketing strategies and
              techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
