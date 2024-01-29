import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import './App.css';
import HTTP from './services';

function App() {
  HTTP.createClient()
  return (
    <div className='h-screen w-screen overflow-hidden relative'>
        {
            !localStorage.getItem('Token') && <Navigate to={'/login'} />
        }
        <Outlet/>
    </div>
  );
}

export default App;
