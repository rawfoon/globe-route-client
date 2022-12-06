import React from 'react';
import { useLoaderData } from "react-router-dom";
import useTitle from '../../../hooks/useTitle';
import ServiceCard from '../ServicesCard/ServiceCard';

const Services = () => {
    const allServices = useLoaderData()
    useTitle('All Services')
    return (
        <div className=" bg-gray-800  text-gray-100 py-5">
            <div  className='container mx-auto'>
            <h1 className='text-3xl md:text-5xl py-5 px-3'>All Services  </h1>
            <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
    {
        allServices.map(service => <ServiceCard 
        key={service._id}
        service={service}></ServiceCard>)
      }
    </div>
        </div>
        </div>
    );
};

export default Services;