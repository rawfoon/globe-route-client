import React, { useContext, useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import ServiceReviews from "../../Reviews/ServiceReview/ServiceReviews";
import {FaStar} from 'react-icons/fa';

const ServiceDetails = () => {

  const {user} = useContext(AuthContext)
  // console.log(user);
  const serviceDetails = useLoaderData();
  useTitle('Service Details')

  const {_id, serviceName, photoURL, description, price, rating } = serviceDetails[0];
  //   console.log(serviceDetails);


  const [reviewFromDb, setReviewFromDb] = useState([])
  // console.log(reviewFromDb);


  useEffect(()=>{
    fetch(`https://globe-route-travels.vercel.app/reviews/${_id}`)
    .then(res => res.json())
    .then(data => {
      setReviewFromDb(data)
    })



  },[])


  const handleAddReview = event =>{
    event.preventDefault()
    const form = event.target
    const review = form.review.value
    const rating = form.rating.value

    const serviceId = _id
    const serviceInfoName = serviceName
    const name = user.displayName
    const email = user.email
    const photoURL = user.photoURL

    // get date 
    const date = new Date()

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}-${month}-${year}`;

    let hour = date.getHours()
    let minutes = date.getMinutes();
    const currentTime = `${hour}:${minutes}`

    const time = [currentTime, currentDate]

    const reviewDetails = {
      serviceId,
      serviceInfoName,
      email,
      name,
      photoURL,
      review,
      rating,
      time

    }
    console.log(reviewDetails);

    const addedReview = [reviewDetails, ...reviewFromDb]


    fetch(`https://globe-route-travels.vercel.app/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast("Successfully Added", {
            position: "top-center",
            autoClose: 2000,
          });
        
          setReviewFromDb(addedReview)
          form.reset();
        }
      })
      .catch((e) => console.error(e));

  }


  return (
    <div className=" bg-gray-800  text-gray-100 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className=" col-span-1 mx-2">
          <div className=" rounded-md  max-w-xl mx-auto shadow-md  bg-gray-900  text-gray-100">
            <PhotoProvider>
              <PhotoView src={photoURL}>
                <img
                  src={photoURL}
                  alt=""
                  className="object-cover object-center w-full rounded-t-md   bg-gray-500"
                />
              </PhotoView>
            </PhotoProvider>
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">
                  {serviceName}
                </h2>
                <p className=" text-gray-100">{description}</p>
              </div>
              <div className='flex justify-between'>
			<p>Price: ${price}</p>
			<p className='flex items-center'><FaStar className='text-yellow-500 mr-2'/>{rating}</p>
		</div>
              {/* <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-violet-400  text-gray-900"
              >
                Read more
              </button> */}
            </div>
          </div>
        </div>

        {/* review section */}
        <div className=" md:col-span-2 mx-2">
          {
            !user ?
            <>
            <div className=" m-3  text-5xl flex gap-8 items-center text-[#002D74]">
            <p className=" text-slate-200">Please login to add a review.</p>
            <Link
              to="/login"
              className="py-2 px-5 text-xl bg-white border rounded-xl hover:scale-110 duration-300  bg-slate-300"
            >
              Login
            </Link>
          </div>
            
            
            </>

            :

            <>
            <div className="m-3">
            <h1 className="text-5xl">Add a review on this service.</h1>
            <form onSubmit={handleAddReview} className="mt-5">
              <textarea
                id="review"
                name="review"
                type="text"
                placeholder="Write a review on this service..."
                className="w-full h-24 pt-2  px-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900"
                required
              />
              <input
                className="p-2 mt-8 rounded-xl border font-semibold text-slate-900  bg-white"
                type="text"
                name="rating"
                placeholder="Rating"
                
              />
              <br />

              <input
                className="px-8 py-3 my-2 text-lg font-semibold rounded  bg-violet-400  hover:bg-violet-500  text-gray-900"
                type="submit"
                name=""
                value="Add Review"
              />
            </form>
          </div>
            
            </>
          }

          <div className="m-3">

          {
            reviewFromDb.length !== 0 ?
            reviewFromDb.map(singleReview => <ServiceReviews 
              key={singleReview._id}
              singleReview={singleReview}></ServiceReviews>)

              :
              <p className="text-4xl">No reviews were added.</p>
            }
            </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
