import React from 'react'
import Swal from 'sweetalert2';

const BlogPost = () => {
  const handlePost =(event)=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const texts=form.texts.value;
    const comment=[];
    const like=0;
     
    const blogInfo={name,texts,comment,like};
    console.log(blogInfo);

    fetch(`http://localhost:5000/post_blog`,{
      method: "POST",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(blogInfo)
    })
    .then((res) => res.json())
    .then((data) => {
       if (data.insertedId) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your blog has been Posted',
          background: 'orange',
          color: 'black',
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      }
      else{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your blog has not been Posted',
          background: 'red',
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
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex items-center justify-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     <form onSubmit={handlePost} >
     <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Post by </span>
          </label>
          <input type="text" placeholder="Name" name='name' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Write  Your text</span>
          </label>
          <textarea rows={10} cols={100} type="text" name="texts" placeholder="Texts" className="input input-bordered h-40 w-full" />

        </div>
        <div className=" flex  justify-end items-center gap-4 ">
        <input type="submit" value={"Post"} className="btn btn-circle bg-red-500 text-slate-300
        hover:text-black " />
         
        </div>
      </div>
     </form>
    </div>
    </div>
    </div>
  )
}

export default BlogPost