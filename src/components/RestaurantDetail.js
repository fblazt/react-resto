import React from 'react'

export default function RestaurantDetail({ restaurantInfo, setType, reviewRestaurant }) {
  
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

  return (
    <div>

      {/* Back navigation button */}
      <button onClick={() => setType(1)} className="mb-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Back</button>
      {/* Back navigation button */}

      {/* Restaurant detail information */}
      <div>
        <h2 className="mb-3 text-3xl font-semibold">{restaurantInfo.name}</h2>
        <img src={`https://maps.googleapis.com/maps/api/streetview?size=800x400&location=${restaurantInfo.coordinates.lat},${restaurantInfo.coordinates.lng}&heading=70&pitch=0&key=${process.env.REACT_APP_MAPS_KEY}`} alt="" className="mb-6 rounded-3xl shadow-md"/>
        <div className="mb-6">
          <div className="flex flex-row justify-between">
            <button onClick={() => reviewRestaurant(restaurantInfo.id)} className="py-1 px-2 bg-blue-500 transition hover:bg-blue-600 text-white rounded-full shadow-md">Add review +</button>
            <div className="flex flex-col items-end">
            {restaurantInfo.rating === 0
              ? <p>No ratings yet</p>
              : <div className="flex flex-col items-center">
                  <p className="mr-2 text-4xl">{restaurantInfo.rating}</p>
                  <div className="flex flex-nowrap">
                    {overallRatings(restaurantInfo.rating)}
                  </div>
                </div>
            }
            </div>
          </div>
        </div>
        <div className="mb-2">
          <p className="mb-4 font-semibold text-xl">All reviews</p>
          <div className="max-h-72 overflow-y-auto">
            {restaurantInfo.reviews.length === 0
              ? <p>No ratings yet</p>
              : restaurantInfo.reviews.map((review, index) => {
                  return (
                    <div key={index} className="mb-4 flex flex-row">
                      <div className="w-full flex flex-row items-start">
                        <div>
                          <svg className="mr-2 h-12 w-12 text-blue-400" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <div className="mb-4 flex flex-col">
                            <p className="text-lg font-semibold">{review.username}</p>
                            <div className="flex flex-nowrap">
                              {overallRatings(review.stars)}
                            </div>
                          </div>
                          <p className="text-lg">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
            }
          </div>
        </div>
      </div>
      {/* Restaurant detail information */}
    </div>
  )
}
