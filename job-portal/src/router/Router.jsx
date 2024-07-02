import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import App from '../App.jsx';
import Home from '../pages/Home';
import MyJobs from '../pages/MyJobs';
import SalaryPage from '../pages/SalaryPage';
import CreateJob from '../pages/CreateJob';
import UpdateJob from '../pages/UpdateJob';
import JobDetails from '../pages/JobDetails';
import Login from '../pages/Login.jsx';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Register from '../pages/Register.jsx';
import ApplyNow from '../pages/ApplyNow.jsx';
import LandingPage from '../pages/LandingPage.jsx';
import AboutUsPage from '../pages/AboutUsPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/my-job",
        element: <PrivateRoute><MyJobs /></PrivateRoute>
      },
      {
        path: "/salary",
        element: <SalaryPage />
      },
      {
        path: "/post-job",
        element: <PrivateRoute><CreateJob /></PrivateRoute>
      },
      {
        path: "edit-job/:id",
        element: <UpdateJob />,
        loader: ({ params }) => fetch(`http://localhost:5000/all-jobs/${params.id}`)
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
      },
      {
        path: "/jobs/:id/apply",
        element: <PrivateRoute><ApplyNow /></PrivateRoute>,
      },

    ]
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/aboutuspage",
    element: <AboutUsPage />
  }
]);

export default router;
