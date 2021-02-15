import React from 'react'
import { useState } from 'react'

export default function RestaurantAdd({ allRestaurants, addRestaurant }) {
  const [imgUrl, setimgUrl] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')

  let data = {
    id: allRestaurants[allRestaurants.length - 1].id + 1,
    name: name,
    coordinate: {
      lat: sessionStorage.getItem('tempCoordinates').replace(/[()]/g, "").split(', ')[0],
      lng: sessionStorage.getItem('tempCoordinates').replace(/[()]/g, "").split(', ')[1]
    },
    address: address,
    pict: imgUrl,
    rating: 4,
    ratings: [
      {
        stars: 4,
        comment: 'Great! But not many veggie options.'
      },
      {
        stars: 4,
        comment: 'My favorite restaurant!'
      },
    ]
  }

  const newRestaurant = (e) => {
    e.preventDefault()
    addRestaurant(data)
  }

  return (
    <div>
      <h4 className="mb-5 text-xl font-semibold">Add new restaurant</h4>
      <form onSubmit={newRestaurant}>
        <div className="mb-3">
          <label htmlFor="url" className="text-lg  text-gray-800">Image link</label>
          <input type="text" className="w-full h-8 mt-1 border-2 border-gray-400 rounded-md" required value={imgUrl} onChange={(e) => setimgUrl(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="text-lg text-gray-800">Restaurant name</label>
          <input type="text" className="w-full h-8 mt-1 border-2 border-gray-400 rounded-md" required value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="url" className="text-lg text-gray-800">Address</label>
          <textarea name="address" id="address" cols="30" rows="3" className="w-full mt-1 border-2 border-gray-400 rounded-md" required value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
        </div>
        <button onClick={newRestaurant} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
      </form>
    </div>
  )
}
