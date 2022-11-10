
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import AddServices from '../../pages/AddServices/AddServices';
import Blogs from '../../pages/Blogs/Blogs';
import Error from '../../pages/Error/Error';
import Home from '../../pages/Home/Home'
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import MyReviews from '../../pages/Reviews/MyReviews/MyReviews';
import ServiceDetails from '../../pages/Services/ServiceDetails/ServiceDetails';
import Services from '../../pages/Services/Services/Services';
import PrivateRoute from '../PrivateRoute/PrivateRoute';



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch(`https://globe-route-travels.vercel.app/homeservices`)
                
            },
            {
                path: '/addservices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: ()=> fetch(`https://globe-route-travels.vercel.app/services`)

            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params})=> fetch(`https://globe-route-travels.vercel.app/services/${params.id}`)

            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
        ]
    }
])

