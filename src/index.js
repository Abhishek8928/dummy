import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Signup from './Component/Signup';
import Body from './Component/Body'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Investor from './Component/Investorlist'

let appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/Investor",
                element: <Investor />
            }, {
                path: "/",
                element: <Body />
            }
        ]
    }, {
        path: "/Signup",
        element: <Signup />
    }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={appRoutes} />

);


