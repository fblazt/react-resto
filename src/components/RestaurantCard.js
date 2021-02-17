import React from 'react'

export default function RestaurantCard({ restaurantInfo, restaurantDetail }) {

  const overallRatings = (length) => {
    let ratings = []
    for (let i = 0; i < length; i++) {
      ratings.push(
        <svg key={i} className="h-4 w-4 text-yellow-300" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
      )
    }
    return ratings
  }

  return (
    <div onClick={() => restaurantDetail(restaurantInfo.id)} className="mb-6 p-4 w-full bg-green-200 rounded-2xl shadow-md hover:shadow-lg cursor-pointer">
      <img src={restaurantInfo.pict} alt="" className="mb-4 rounded-3xl shadow-lg"/>
      <h4 className="mb-3 text-2xl font-semibold">{restaurantInfo.name}</h4>
      <div className="mb-1 flex flex-nowrap text-yellow-500">
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
      </div>
      <p className="mb-4 text-sm">{restaurantInfo.address}</p>
      <button className="py-2 px-4 bg-blue-500 transition hover:bg-blue-600 text-white rounded-full shadow-md">Add review +</button>
    </div>
  )
}
