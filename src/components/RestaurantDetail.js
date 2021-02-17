import React from 'react'

export default function RestaurantDetail({ restaurantInfo, setType }) {
  
  const overallRatings = (length) => {
    let ratings = []
    for (let i = 0; i < length; i++) {
      ratings.push(
        <svg key={i} className="h-7 w-7 text-yellow-300" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
      )
    }
    return ratings
  }

  return (
    <div>
      <button onClick={() => setType(1)} className="mb-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-greeb-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Back</button>
      <div>
        <h2 className="mb-2 text-lg font-semibold">{restaurantInfo.name}</h2>
        <img src={`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${restaurantInfo.coordinates.lat},${restaurantInfo.coordinates.lng}&heading=70&pitch=0&key=${process.env.REACT_APP_MAPS_KEY}`} alt="" className="mb-6 rounded-3xl shadow-md"/>
        <div className="mb-6">
          <p className="mb-2 font-semibold text-lg">Overall rating</p>
          <div className="flex flex-nowrap items-end">
            <p className="mr-2 text-6xl font-thin">{restaurantInfo.rating}</p>
            {overallRatings(restaurantInfo.rating)}
          </div>
        </div>
        <div className="mb-2">
          <p className="mb-2 font-semibold text-lg">All reviews</p>
          <div>
            {restaurantInfo.ratings.map(review => {
              return (
                <div className="mb-4 flex flex-row">
                  <div className="flex flex-row items-start justify-center">
                    <svg className="mr-2 h-12 w-12 text-blue-400" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
                    </svg>
                    <div className="flex flex-col">
                      <div className="flex flex-row items-center">
                        <p className="mr-1 font-semibold">{review.stars}</p>
                        <svg className="h-6 w-6 text-yellow-300" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                        </svg>
                      </div>
                      <p className="text-xl">{review.comment}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>      
  )
}
