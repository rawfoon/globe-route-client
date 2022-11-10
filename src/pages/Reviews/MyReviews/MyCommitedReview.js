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

            
        </div>
    );
};

export default MyCommitedReview;