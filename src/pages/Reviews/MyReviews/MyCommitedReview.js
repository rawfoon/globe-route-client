import React, {useState} from 'react';
import {FaClock, FaStar} from 'react-icons/fa'
import { toast } from 'react-toastify';

const MyCommitedReview = ({myReview, variables, handleDelete, handleUpdateReview}) => {
  // console.log(myReview);

  const [finalReview, setFinalReview] = useState(myReview)

  const {_id, review, rating, time, photoURL, name, email, serviceInfoName} = finalReview



  const { edit, setEdit, deleting, setDeleting} = variables
  


  const handleEditState = ()=>{
    if(!edit){
      setEdit(!edit)
    }
  }
  const handleDeleteState = ()=>{
    console.log('delete clicked');
    if(!deleting){
      setDeleting(!deleting)
    }
  }

  const handleCancel = ()=>{
    setEdit(false)
    setDeleting(false)
  }
  const handleUpdate  = event =>{
    event.preventDefault()
    const form = event.target
    const review = form.review.value
    const rating = form.rating.value

    const editedReview = {
      _id,
      form, 
      review,
      rating,
      finalReview,
      setFinalReview
    }
    handleUpdateReview(editedReview)
  }


 




    return (
        <div className='mx-auto max-w-4xl '>

                <div className="my-8">
      <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl md:text-3xl mb-2 text-orange-400 font-semibold tracking-wide">
             Service Name: {serviceInfoName}
            </h2>
            <h2 className="text-xl md:text-3xl  font-semibold tracking-wide">
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
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
            <img src={photoURL} className='w-10 h-10 rounded-full' alt="" />
            <p>Name: {name}</p>
            </div>
            <p>Email: {email}</p>
          </div>
            {/* Modal */}
            <div className={edit ? 'fixed left-0 md:left-[38%] top-[20%] ' : 'hidden' }>
            <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-600 dark:text-gray-100  ">
	<h2 className="text-xl font-semibold leading-tight tracking-wide">Please edit your review.</h2>
  <div  >
  <form onSubmit={handleUpdate} className="mt-5">
              <textarea
                id="review"
                name="review"
                type="text"
                placeholder="Write a review on this service..."
                className="w-full h-24 pt-2  px-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                defaultValue={review}
                required
              />
              <input
                className="p-2 mt-8 rounded-xl border font-semibold text-slate-900 dark:bg-white"
                type="text"
                name="rating"
                placeholder="Rating"
                defaultValue={rating}
                
              />
              <br />

              <div className="flex flex-col justify-center gap-3 mt-6 sm:flex-row">
              <input
                className="px-6 py-3 my-2 text-lg font-semibold rounded dark:bg-violet-400 dark:hover:bg-violet-500 dark:text-gray-900"
                type="submit"
                name=""
                value="Update Review"
              />
	
		{/* <button  className="px-6 py-2 rounded-sm shadow-sm dark:bg-violet-400 dark:text-gray-900">Agree</button> */}
		<button onClick={handleCancel} className="px-6 py-2 rounded-sm">Cancel</button>
  </div>
            </form>
	</div>
</div>
            </div>


            <div className={deleting ? 'fixed left-0 md:left-[40%] top-[30%] ' : 'hidden' }>
            <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-600 dark:text-gray-100 ">
	<h2 className="text-xl font-semibold leading-tight tracking-wide">Are you sure to <span className='text-orange-500'>delete</span> this review?</h2>

	<div className="flex flex-col justify-center gap-3 mt-6 sm:flex-row">
		<button onClick={()=> handleDelete(_id)} className="px-6 py-2 rounded-sm shadow-sm bg-red-500 text-white">Agree</button>
		<button onClick={handleCancel} className="px-6 py-2 rounded-sm">Cancel</button>
	</div>
</div>
            </div>


          <div className='flex justify-center'>
            <button onClick={handleEditState} className='px-5 py-2 m-2 text-lg font-semibold rounded bg-yellow-300 text-black '>Edit</button>
            <button onClick={handleDeleteState} className='px-5 py-2 m-2 text-lg font-semibold rounded bg-red-500 text-white'>Delete</button>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default MyCommitedReview;