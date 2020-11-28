import React from 'react'

export default function RestaurantReview() {
  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold">Restaurant Name</h2>
      <img src="https://images.ctfassets.net/hrltx12pl8hq/6gefxWFu1cp4cECQE6qpRS/15f4228cb3a2265c990dbaf1304ecea2/shutterstock_1469674187.jpg" alt="" className="mb-2 rounded-3xl shadow-md"/>
      <div>
        <label htmlFor="rate">Your rating</label>
        <div className="mb-2 flex flex-nowrap">
          <svg style={{width:'24px', height:'24px'}} viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
          </svg>
          <svg style={{width:'24px', height:'24px'}} viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
          </svg>
          <svg style={{width:'24px', height:'24px'}} viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
          </svg>
          <svg style={{width:'24px', height:'24px'}} viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
          </svg>
          <svg style={{width:'24px', height:'24px'}} viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
          </svg>
        </div>
      </div>
      <div className="mb-2">
        <label htmlFor="comments">Your comments</label>
        <textarea name="" id="" cols="30" rows="10" className="w-full border-2 border-gray-200 rounded-lg"></textarea>
      </div>
      <button className="py-1 px-2 bg-blue-500 transition hover:bg-blue-600 text-white rounded-lg shadow-md">Submit</button>
    </div>
  )
}
