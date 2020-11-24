import React from 'react'

export default function RestaurantDetail() {
  return (
    <div className="mb-2 p-2 w-full bg-green-200 rounded-2xl shadow-md">
      <img src="https://images.ctfassets.net/hrltx12pl8hq/6gefxWFu1cp4cECQE6qpRS/15f4228cb3a2265c990dbaf1304ecea2/shutterstock_1469674187.jpg" alt="" className="mb-2 rounded-3xl shadow-md"/>
      <p className="text-lg font-semibold">Restaurant Name</p>
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
      <p className="text-xs mb-2">Jl. P. Tubagus Angke Blok B-9D No. 1-3 Jelambar Grogol Petamburan Jakarta Barat DKI Jakarta 4 1, RW.1</p>
      <button className="py-1 px-2 bg-blue-500 transition hover:bg-blue-600 text-white rounded-lg shadow-md">Add review +</button>
    </div>
  )
}
