import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="md:w-3/4 lg:w-1/2 mt-28 rounded mx-auto shrink-0 shadow py-4 bg-[#FFF]">
      <h2 className="text-center font-medium text-3xl mb-10 mt-3">
        Register your account
      </h2>
      <div className="text-red-400 mt-4 w-10/12 mx-auto">
        <hr />
      </div>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="image"
            placeholder="Enter your Photo url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email address</span>
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center">
        Already have an account?{" "}
        <Link to="/login">
          <span className="text-orange-300 ">Login</span>
        </Link>
      </p>
    </div>
  );
};

export default Register;
