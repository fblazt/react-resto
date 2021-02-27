import React from 'react'

export default function RestaurantCard({ restaurantInfo, restaurantDetail, reviewRestaurant }) {

  const overallRatings = (length) => {
    let ratings = []

    if ((length % 1 !== 0)) {

      for (let i = 0; i < Math.floor(length); i++) {
        ratings.push(
          <svg key={i} className="h-5 w-5 text-yellow-500" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
          </svg>
        )
      }
      ratings.push(
        <svg key={ratings.length+1} className="h-5 w-5 text-yellow-500" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
        </svg>
      )

    } else if (!(length % 1 !== 0)) {

      for (let i = 0; i < length; i++) {
        ratings.push(
          <svg key={i} className="h-5 w-5 text-yellow-500" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
          </svg>
        )
      }

    }
    
    return ratings
  }

  const review = (e) => {
    e.stopPropagation()
    reviewRestaurant(restaurantInfo.id)
  }

  return (
    <div onClick={() => restaurantDetail(restaurantInfo.id)} className="mb-6 p-4 w-full bg-green-200 rounded-2xl shadow-md hover:shadow-lg cursor-pointer">
      <img src={restaurantInfo.pict} alt="" className="mb-4 rounded-3xl shadow-lg"/>
      <h4 className="mb-3 text-2xl font-semibold">{restaurantInfo.name}</h4>
      <div className="mb-1 flex flex-nowrap text-yellow-500">
        {restaurantInfo.rating === 0
          ? <p>No ratings yet</p>
          : overallRatings(restaurantInfo.rating)
        }
      </div>
      <p className="mb-4 text-sm">{restaurantInfo.address}</p>
      <button onClick={review} className="py-2 px-4 bg-blue-500 transition hover:bg-blue-600 text-white rounded-full shadow-md">Add review +</button>
    </div>
  )
}
