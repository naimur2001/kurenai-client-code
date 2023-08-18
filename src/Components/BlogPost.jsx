import React from 'react'

const BlogPost = () => {
  return (
    <div>
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex items-center justify-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     <form onSubmit={""} >
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