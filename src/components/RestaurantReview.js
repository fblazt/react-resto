import React from 'react'
import { useState } from 'react'

export default function RestaurantReview({setType, restaurantInfo, addReview}) {
  const [username, setUsername] = useState('') 
  const [review, setReview] = useState('') 
  const [rate, setRate] = useState(1) 

  const submitReview = (e) => {
    e.preventDefault()
    addReview(restaurantInfo.id, {
      username: username,
      stars: rate,
      comment: review
    })
  }

  return (
    <div>

      {/* Back navigation button */}
      <button onClick={() => setType('restaurant-list')} className="mb-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Back</button>
      {/* Back navigation button */}

      {/* Restaurant review form */}
      <div>
        <h2 className="mb-3 text-3xl font-semibold">{restaurantInfo.name}</h2>
        <img src={`https://maps.googleapis.com/maps/api/streetview?size=800x400&location=${restaurantInfo.coordinates.lat},${restaurantInfo.coordinates.lng}&heading=70&pitch=0&key=${process.env.REACT_APP_MAPS_KEY}`} alt="" className="mb-6 rounded-3xl shadow-md"/>

        <div className="mb-3">
          <label htmlFor="username" className="text-lg text-gray-800">Your name</label>
          <input 
            type="text" 
            id="username" 
            className="w-full mt-1 px-2 border-2 border-gray-400 hover:border-blue-400 focus:border-blue-400 rounded-md"
            required 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label htmlFor="rate">Your rating</label>
          <div className="flex flex-nowrap">
            <svg
              onClick={() => setRate(1)} 
              className={rate >= 1 ? 'h-7 w-7 text-yellow-300' : 'h-7 w-7 text-gray-300'} 
              viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
            </svg>
            <svg
              onClick={() => setRate(2)} 
              className={rate >= 2 ? 'h-7 w-7 text-yellow-300' : 'h-7 w-7 text-gray-300'} 
              viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
            </svg>
            <svg
              onClick={() => setRate(3)} 
              className={rate >= 3 ? 'h-7 w-7 text-yellow-300' : 'h-7 w-7 text-gray-300'} 
              viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
            </svg>
            <svg
              onClick={() => setRate(4)} 
              className={rate >= 4 ? 'h-7 w-7 text-yellow-300' : 'h-7 w-7 text-gray-300'} 
              viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
            </svg>
            <svg
              onClick={() => setRate(5)} 
              className={rate >= 5 ? 'h-7 w-7 text-yellow-300' : 'h-7 w-7 text-gray-300'} 
              viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
            </svg>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="review" className="text-lg text-gray-800">Review</label>
          <textarea 
            id="review" 
            cols="30" 
            rows="3" 
            className="w-full mt-1 px-2 border-2 border-gray-400 hover:border-blue-400 focus:border-blue-400 rounded-md" 
            required 
            value={review} 
            onChange={(e) => setReview(e.target.value)}>
          </textarea>
        </div>
        
        <button onClick={submitReview} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
      </div>
      {/* Restaurant review form */}
    </div>
  )
}
