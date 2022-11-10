import React from "react";
import {FaStar, FaClock} from 'react-icons/fa'

const ServiceReviews = ({singleReview}) => {
    const {review, name, serviceId, email, rating, time, photoURL } = singleReview
    // console.log(singleReview);
  return (
    <div className="my-8">
      <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
             {review}
            </h2>
            
          </div>
          <div className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-2"><FaStar className="text-yellow-500"/> <span>{rating}</span></p>
            <div>
                <div className="flex items-center gap-2" >
                    <FaClock className="text-3xl"/>
                    <div>
                        <p>{time[0]}</p>
                        <p>{time[1]}</p>

                    </div>

                </div>
            </div>
          </div>

          <hr />
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="flex  items-center gap-2">
            <img src={photoURL} className='w-10 h-10 rounded-full' alt="" />
            <p>Name: {name}</p>
            </div>
            <p>Email: {email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceReviews;
