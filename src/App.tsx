import React from 'react';
import {Navigate, Outlet, RouterProvider} from 'react-router-dom';
import './App.css';
import {router} from "./router";
import HTTP from './services';
import Home from './pages/Home';

function App() {
  HTTP.createClient()
  return (
    <div className='h-screen w-screen overflow-hidden'>
        {
            !localStorage.getItem('Token') ?
            <Navigate to={'/login'} />:
            null
        }
        <Outlet/>
    </div>
  );
}

export default App;
