import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
           <div className="hero min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Add Username, Password voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={''} >
      <div className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input type="text" name='username' placeholder="username" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link to={"/forgot"} className="label-text-alt link link-hover text-red-500 text-base">Forgot password?</Link>
          </label>
        </div>
        <div className=" flex flex-col justify-center items-center gap-4 ">
        <input type="submit" value={"Login"} className="btn btn-warning " />
         <Link to={"/register"} > <button className="btn bg-lime-500 text-black">If New Create Account</button></Link>
        </div>
      </div>
      </form>
    </div>
  </div>
</div>
    </div>
  );
};

export default Login;