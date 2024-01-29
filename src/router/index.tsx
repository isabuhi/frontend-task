import {createBrowserRouter} from "react-router-dom";
import Login from '../pages/LoginSignup';
import Home from '../pages/Home';
import App from '../App';
import LoginSignup from '../pages/LoginSignup';
import Profile from '../pages/Profile';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "login",
                element: <LoginSignup/>,
            },
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "profile",
                element: <Profile/>
            }

        ],

    },
]);