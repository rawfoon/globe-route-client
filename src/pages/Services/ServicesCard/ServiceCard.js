import React from 'react';
import { Link } from 'react-router-dom';
import {FaStar} from 'react-icons/fa'

const ServiceCard = ({service}) => {

	const {_id ,serviceName, photoURL, price, rating, description } = service


    return (
        <div>



<div className=" rounded-md shadow-md  bg-gray-900  text-gray-100">
	<img src={photoURL} alt="" className="object-cover object-center w-full rounded-t-md h-72  bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{serviceName}</h2>
			<p className=" text-gray-100">{description.length >100 ? description.slice(0,100) : description }</p>

		</div>
		<div className='flex justify-between'>
			<p>Price: ${price}</p>
			<p className='flex items-center'><FaStar className='text-yellow-500 mr-2'/>{rating}</p>
		</div>
		<Link to={`/services/${_id}`} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-violet-400  text-gray-900">See Details</Link>
	</div>
</div>



            
        </div>
    );
};

export default ServiceCard;