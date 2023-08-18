import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex items-center justify-center">
    <div className="text-white text-center p-8 rounded-lg shadow-lg bg-white bg-opacity-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Blog Website</h1>
      <p className="text-lg mb-6">Discover Amazing Things Here</p>
    <Link  to={"/blogpost"} >  <button className="btn btn-neutral">Post Your Blog</button></Link>
    </div>
  </div>
  )
}

export default Home