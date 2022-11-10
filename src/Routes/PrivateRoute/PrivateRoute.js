import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <>
        <div className=" flex justify-center items-center flex-col">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          <div><p className="mt-4 animate-bounce">Loading...</p></div>
        </div>
        </>
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }

    return children 
};

export default PrivateRoute;