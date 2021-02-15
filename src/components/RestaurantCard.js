import React from 'react'

export default function RestaurantCard({ restaurantInfo, restaurantDetail }) {
  return (
    <div onClick={() => restaurantDetail(restaurantInfo.id)} className="mb-2 p-2 w-full bg-green-200 rounded-2xl shadow-md cursor-pointer">
      <img src={restaurantInfo.pict} alt="" className="mb-2 rounded-3xl shadow-md"/>
      <p className="text-lg font-semibold">{restaurantInfo.name}</p>
      <div className="mb-2 flex flex-nowrap">
        <svg style={{width:'16px', height:'16px'}} viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
        <svg style={{width:'16px', height:'16px'}} viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
        <svg style={{width:'16px', height:'16px'}} viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
        <svg style={{width:'16px', height:'16px'}} viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
        <svg style={{width:'16px', height:'16px'}} viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
      </div>
      <p className="text-xs mb-2">{restaurantInfo.address}</p>
      <button className="py-1 px-2 bg-blue-500 transition hover:bg-blue-600 text-white rounded-lg shadow-md">Add review +</button>
    </div>
  )
}
