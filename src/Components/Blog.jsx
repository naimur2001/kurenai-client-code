import React, { useEffect, useState } from 'react'

const Blog = () => {
  const [blogs,setBlogs]=useState([]);

useEffect(()=>{
  fetch(`http://localhost:5000/get_blog`)
    .then(res=>res.json())
    .then((data) =>setBlogs(data))
},[])
  return (
    <div>
         <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex  justify-center">
<div className='grid grid-cols-3 gap-10' >
  {
    blogs.map(blog=><div key={blog._id}>
    <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{blog.name}</h2>
    <p>{blog.texts}</p>
    <div className="card-actions flex flex-col justify-end">
      <button  className="btn bg-fuchsia-500 text-slate-100 hover:text-black flex justify-around"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>
<span>Like {blog.like}</span></button>
    

  <span className='w-full flex'>
    <textarea rows={5} cols={10} type="text" name="comment" placeholder="Comment" className="input input-bordered h-12 w-full" />
    <button type="submit"  className="svg-button hover:bg-orange-500 rounded-full p-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  </button>
  </span>




    
     </div>
  </div>

</div>
    </div>)
  }
</div>
    </div>
    </div>
  )
}

export default Blog