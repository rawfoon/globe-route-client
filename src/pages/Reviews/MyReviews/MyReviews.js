import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import MyCommitedReview from "./MyCommitedReview";
import { toast } from 'react-toastify';
import useTitle from "../../../hooks/useTitle";


const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
//   console.log("review", user);

useTitle('My Reviews')

  const [myReviews, setMyReviews] = useState([]);
  // console.log('hello',myReviews);
  const [edit, setEdit] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const variables = { edit, setEdit, deleting, setDeleting}
  


  useEffect(() => {
    fetch(`https://globe-route-travels.vercel.app/myreviews/${user?.email}`,{
      headers: {
        authorization : `Bearer ${localStorage.getItem('globeRoutTravelToken')}`
      }
    })
      .then((res) => {
        if(res.status === 401 || res.status === 403){
          logOut()
          .then(() => {
            console.log("logged out");
            
          })
          .catch((error) => console.error(error));

        }
        
        return res.json()
      })
      .then((data) => {
        setMyReviews(data);
        // console.log('reviewsssss', data);
      })
      .catch((e) => console.error(e));
  }, [user?.email]);


  const handleUpdateReview = editedReview =>{
    console.log(editedReview);
    const {_id, review, rating, finalReview} = editedReview
    // console.log(finalReview);
    const updatedReview ={
      _id,
      review,
      rating

    }

    fetch(`https://globe-route-travels.vercel.app/myreviews/${_id}`,{
      method: 'PUT',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(updatedReview)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        finalReview.review = review
        finalReview.rating= rating
        // setMyReviews(data);
        setEdit(false)
        if(data.modifiedCount > 0){
          toast.success('Review Updated',{
            position: "top-center",
            autoClose: 2000
          })

        }
      })
      .catch((e) => console.error(e));
  }



  const handleDelete = (id) =>{
    fetch(`https://globe-route-travels.vercel.app/reviews/${id}`,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.deletedCount > 0 ){
        toast.error('Review Deleted',{
          position: "top-center",
autoClose: 2000
        })
        setDeleting(false)
        const remaining = myReviews.filter(rev => rev._id !== id)
        setMyReviews(remaining)

      }
    })
    .catch(e => console.error(e))

  }

  return (
    <div className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto py-10">
        <div className="flex flex-col justify-center max-w-xs mx-auto p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
          <img
            src={user?.photoURL}
            alt=""
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />
          <div className="space-y-4 text-center divide-y divide-gray-700">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">
                {user?.displayName}
              </h2>
              <p className="px-5 text-xs sm:text-base dark:text-gray-400">
                {user?.email}
              </p>
            </div>
          </div>
        </div>

        {
            myReviews.length === 0 ?
            <p>No reviews were added</p>
            :
            myReviews.map(myReview => <MyCommitedReview 
            key={myReview._id}
            myReview={myReview}
            variables={variables}
            handleDelete={handleDelete}
            handleUpdateReview={handleUpdateReview}>


            </MyCommitedReview>)
        }



      </div>
    </div>
  );
};

export default MyReviews;
