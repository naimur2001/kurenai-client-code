import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import BlogPost from "./BlogPost";
import Blog from "./Blog";


const router=createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
     {
      path: 'dashboard',
      element: <Dashboard></Dashboard>
     },
      {
        path: 'blogpost',
        element: <BlogPost></BlogPost>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
    ]
  }
])

export default router;