import React from 'react'
import { useState } from 'react'

export default function RestaurantAdd({ allRestaurants, addRestaurant, setType }) {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')

  let data = {
    id: allRestaurants[allRestaurants.length - 1].id + 1,
    name: name,
    coordinates: {
      lat: sessionStorage.getItem('tempCoordinates').replace(/[()]/g, "").split(', ')[0],
      lng: sessionStorage.getItem('tempCoordinates').replace(/[()]/g, "").split(', ')[1]
    },
    address: address,
    pict: `https://maps.googleapis.com/maps/api/streetview?size=800x400&location=${sessionStorage.getItem('tempCoordinates').replace(/[()]/g, "").split(', ')[0]},${sessionStorage.getItem('tempCoordinates').replace(/[()]/g, "").split(', ')[1]}&heading=70&pitch=0&key=${process.env.REACT_APP_MAPS_KEY}`,
    rating: 4,
    ratings: [
      {
        username: 'Tatang Sutarma',
        stars: 4,
        comment: 'Great! But not many veggie options.'
      },
      {
        username: 'Rudi',
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
      <button onClick={() => setType(1)} className="mb-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Back</button>
      <div>
        <h4 className="mb-3 text-3xl font-semibold">Add new restaurant</h4>
        <form onSubmit={newRestaurant}>
          <div className="mb-3">
            <label htmlFor="name" className="text-lg text-gray-800">Restaurant name</label>
            <input type="text" className="w-full h-10 mt-1 px-2 border-2 border-gray-400 hover:border-blue-400 focus:border-blue-400 rounded-md" required value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="url" className="text-lg text-gray-800">Address</label>
            <textarea name="address" id="address" cols="30" rows="3" className="w-full mt-1 px-2 border-2 border-gray-400 hover:border-blue-400 focus:border-blue-400 rounded-md" required value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
          </div>
          <button onClick={newRestaurant} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
        </form>
      </div>
    </div>
  )
}
