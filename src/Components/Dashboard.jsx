import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const Dashboard = () => {

  const [blogs,setBlogs]=useState([]);
  const [users,setUsers]=useState([]);

useEffect(()=>{
  fetch(`https://kurenai-server-steel.vercel.app/get_blog`)
    .then(res=>res.json())
    .then((data) =>setBlogs(data))
},[])
useEffect(()=>{
  fetch(`https://kurenai-server-steel.vercel.app/get_user`)
    .then(res=>res.json())
    .then((data) =>setUsers(data))
},[])


const userCount = users.length;
const blogCount = blogs.length;

const data = [
  { name: 'Users', count: userCount },
  { name: 'Blogs', count: blogCount },
];

const colors = ['red', 'orange'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


  return (
    <div>
      <div className='bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex flex-col justify-center' >
<h1 className='text-center font-semibold text-4xl'>Dashboard</h1>
<div className='flex justify-center'>
<BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="count" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
</div>

      </div>
    </div>
  );
};

export default Dashboard;