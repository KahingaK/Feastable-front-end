import React from 'react'

function ReviewList({ reviews }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8">
      <div className="p-6">
        {reviews.map((review, index) => (
          <div key={index} className="my-4">
            <p className="text-lg font-bold mb-2">{review.rating} stars</p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewList