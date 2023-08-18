import React from 'react'
import Swal from 'sweetalert2';

const Register = () => {

  const handleRegister =(event)=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const username=form.username.value;
    const password=form.password.value;
     
    const userInfo={email,username,password};
    console.log(userInfo);

    fetch(`http://localhost:5000/post_user`,{
      method: "POST",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.message === 'User already exists') {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Sorry, user already exists',
          background: 'orange',
          color: 'white',
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      } 
    else  if (data.message === 'Username is already taken') {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Sorry, user already exists',
          background: 'orange',
          color: 'white',
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      } 
      else if (data.insertedId) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your data has been saved',
          background: 'yellow',
          color: 'black',
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      }
    });
  }

  return (
    <div>
              <div className="hero min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Signup now!</h1>
      <p className="py-6">Add Email, Username and Password.Lorem ipsum dolor sit amet consectetur Obcaecati, facilis.dolor sit amet consectetur adipisicing elit.</p>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     <form onSubmit={handleRegister} >
     <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
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
      
        </div>
        <div className=" flex flex-col justify-center items-center gap-4 ">
        <input type="submit" value={"Register"} className="btn btn-warning " />
         
        </div>
      </div>
     </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Register