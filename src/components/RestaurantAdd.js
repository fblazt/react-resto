import React from 'react'

export default function RestaurantAdd() {
  return (
    <div>
      <h4 className="mb-5 text-xl font-semibold">Add new restaurant</h4>
      <div className="mb-3">
        <label htmlFor="url" className="text-lg  text-gray-800">Image link</label>
        <input type="text" className="w-full h-8 mt-1 border-2 border-gray-400 rounded-md"/>
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="text-lg text-gray-800">Restaurant name</label>
        <input type="text" className="w-full h-8 mt-1 border-2 border-gray-400 rounded-md"/>
      </div>
      <div className="mb-3">
        <label htmlFor="url" className="text-lg text-gray-800">Address</label>
        <textarea name="address" id="address" cols="30" rows="3" className="w-full mt-1 border-2 border-gray-400 rounded-md"></textarea>
      </div>
      <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
    </div>
  )
}
