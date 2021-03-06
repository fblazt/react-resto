import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import localRestaurants from './localRestaurants.json'
import RestaurantCard from './components/RestaurantCard' 
import RestaurantDetail from './components/RestaurantDetail' 
import RestaurantReview from './components/RestaurantReview' 
import RestaurantAdd from './components/RestaurantAdd' 
import MapContainer from './components/MapContainer'  

export default function App() {
  const [position, setPosition ] = useState({})
  const [type, setType] = useState('restaurant-list')
  const [staticRestaurants, setStaticRestaurants] = useState([])
  const [allRestaurants, setAllRestaurants] = useState([])
  const [rateFilter, setRateFilter] = useState([1, 5])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [restaurantInfo, setRestaurantInfo] = useState({})

  useEffect(() => {
    if (navigator.geolocation) {
      const getPosition = (position) => {
        let userPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
        setPosition(userPosition);
      }
      navigator.geolocation.getCurrentPosition(getPosition);
    }
  }, [])

  useEffect(() => {
    const formattedLocalRestaurants = localRestaurants.map(restaurant => {
      let allIndividualRating = restaurant.reviews.map(review => review.stars)
  
      restaurant.rating = rateLengthLimiter(allIndividualRating)
      restaurant.pict = restaurant.pict.concat(process.env.REACT_APP_MAPS_KEY)

      return restaurant
    })

    setTimeout(() => {
      setStaticRestaurants(formattedLocalRestaurants)
    }, 100);
  }, [])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_CORS_HANDLER}https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${position.lat},${position.lng}&radius=2000&type=restaurant&fields=reviews&key=${process.env.REACT_APP_MAPS_KEY}`)
    .then(res => {
      let data = res.data.results
      
      let googleRestaurants = data.map((item, index) => {

        let restaurant = {
          id: index,
          name: item.name,
          address: item.vicinity,
          coordinates: {
            lat: item.geometry.location.lat,
            lng: item.geometry.location.lng,
          },
          pict:`https://maps.googleapis.com/maps/api/streetview?size=400x250&location=${item.geometry.location.lat},${item.geometry.location.lng}&heading=70&pitch=0&key=${process.env.REACT_APP_MAPS_KEY}`
        }

        axios.get(`${process.env.REACT_APP_CORS_HANDLER}https://maps.googleapis.com/maps/api/place/details/json?place_id=${item.place_id}&fields=reviews&key=${process.env.REACT_APP_MAPS_KEY}`)
        .then(res => {
          let reviews = res.data.result.reviews

          if (!reviews) {
            restaurant.reviews = []
            restaurant.rating = 0
          } else if (reviews) {
            let allIndividualRating = reviews.map(review => review.rating)
            
            restaurant.reviews = reviews.map(review => {
              return {
                username: review.author_name,
                stars: review.rating,
                comment: review.text
              }
            })
            restaurant.rating = rateLengthLimiter(allIndividualRating)
          }
      })
        return restaurant
      })

      setTimeout(() => {
        setAllRestaurants(staticRestaurants.concat(googleRestaurants))
        setFilteredRestaurants(staticRestaurants.concat(googleRestaurants))
      }, 100);
    })
    .catch(() => {
      setTimeout(() => {
        setAllRestaurants(staticRestaurants)
        setFilteredRestaurants(staticRestaurants)
      }, 100);
    })
  }, [position])

  const rateLengthLimiter = (rate) => {
    let formattedRate

    formattedRate = ((rate.reduce((accumulator, currentValue) => accumulator + currentValue, 0)) * 5) / (rate.length * 5)
  
    if (String(formattedRate).length > 3) {
      formattedRate = String(formattedRate).slice(0, 3).replace(",", ".")
    }
  
    return Number(formattedRate)
  }

  const newRestaurantForm = () => {
    setType('restaurant-new-form')
  }

  const addRestaurant = (data) => {
    let existingRestaurants = [...allRestaurants]
    existingRestaurants.push(data)
    setAllRestaurants(existingRestaurants)
    setFilteredRestaurants(existingRestaurants)
    setRateFilter([1, 5])
    setType('restaurant-list')
  }

  const restaurantDetail= (id) => {
    let restaurant = filteredRestaurants.filter(restaurant => restaurant.id === id)
    setRestaurantInfo(restaurant[0])
    setType('restaurant-detail')
  }
  
  const reviewRestaurant = (id) => {
    let restaurant = filteredRestaurants.filter(restaurant => restaurant.id === id)
    setRestaurantInfo(restaurant[0])
    setType('restaurant-review-form')
  }

  const addReview = (id, data) => {
    let restaurant = filteredRestaurants.filter(restaurant => restaurant.id === id)
    restaurant[0].reviews.push(data)
    let restaurantRatings = restaurant[0].reviews.map(review => review.stars)
    restaurant[0].rating = rateLengthLimiter(restaurantRatings)
    setRateFilter([1, 5])
    setType('restaurant-list')
  }

  const filterRestaurant = (selectedRate) => {
    let filteredRestaurants = allRestaurants.filter(restaurant => restaurant.rating >= selectedRate[0] && restaurant.rating <= selectedRate[1])
    setFilteredRestaurants(filteredRestaurants)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-green-400 flex">
      <div className="min-h-screen flex-1">
        <div className="min-h-screen p-3 grid grid-cols-12 grid-rows-6">
          <div className="z-50 p-3 lg:p-6 fixed top-4 lg:top-6 left-4 lg:left-6 bg-gradient-to-br from-blue-400 to-green-400 text-white shadow-md rounded-2xl lg:rounded-3xl flex items-center justify-center font-bold text-xl lg:text-6xl">
            <span>R</span>
          </div>

          <div className="mb-4 lg:mb-0 lg:mr-2 h-60 lg:h-auto col-span-12 lg:col-span-9 row-span-1 lg:row-span-6 bg-white shadow-lg rounded-3xl z-40">
            <MapContainer 
              allRestaurants={filteredRestaurants} 
              newRestaurantForm={newRestaurantForm}
              restaurantDetail={restaurantDetail}/>
          </div>

          
          <div className="lg:ml-2 py-2 px-4 col-span-12 lg:col-span-3 row-span-5 lg:row-span-6 bg-white shadow-lg rounded-3xl">

            {/* Restaurant list */}
            {type === 'restaurant-list' &&
              <div>
                <div className="w-full mb-3">
                  <label htmlFor="filter">Filter by rate</label>
                  <div className="w-full p-2 flex flex-row border border-gray-400 rounded-md">
                    <div className="w-8/12 flex flex-row items-center">
                      <select className="w-2/5 mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue={rateFilter[0]}>
                        <option onClick={() => {setRateFilter([1, 5])}}>1</option>
                        <option onClick={() => {setRateFilter([2, 5])}}>2</option>
                        <option onClick={() => {setRateFilter([3, 5])}}>3</option>
                        <option onClick={() => {setRateFilter([4, 5])}}>4</option>
                        <option onClick={() => {setRateFilter([5, 5])}}>5</option>
                      </select>
                      <span className="w-1/5 text-center font-bold">-</span>
                      <select className="w-2/5 mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue={rateFilter[1]}>
                        <option 
                          disabled={rateFilter[0] === 2 || rateFilter[0] === 3 || rateFilter[0] === 4 || rateFilter[0] === 5}
                          onClick={() => {setRateFilter([rateFilter[0], 1])}}>
                            1
                        </option>
                        <option 
                          disabled={rateFilter[0] === 3 || rateFilter[0] === 4 || rateFilter[0] === 5}
                          onClick={() => {setRateFilter([rateFilter[0], 2])}}>
                            2
                        </option>
                        <option 
                          disabled={rateFilter[0] === 4 || rateFilter[0] === 5}
                          onClick={() => {setRateFilter([rateFilter[0], 3])}}>
                            3
                        </option>
                        <option 
                          disabled={rateFilter[0] === 5}
                          onClick={() => {setRateFilter([rateFilter[0], 4])}}>
                            4
                        </option>
                        <option onClick={() => {setRateFilter([rateFilter[0], 5])}}>5</option>
                      </select>
                    </div>
                    <button onClick={() => filterRestaurant(rateFilter)} className="w-4/12 ml-1 px-2 bg-blue-500 transition hover:bg-blue-600 text-white rounded-md shadow-md">Filter</button>
                  </div>
                </div>
                <div className="overflow-y-auto max-h-screen">
                  {filteredRestaurants.length === 0
                    ? <p>No matching restaurants</p>
                    : filteredRestaurants.map(restaurant => {
                      return (
                        <RestaurantCard 
                          key={restaurant.id} 
                          restaurantInfo={restaurant} 
                          restaurantDetail={restaurantDetail} 
                          reviewRestaurant={reviewRestaurant}/>
                      )
                    })
                  }
                </div>
              </div>
            }

            {/* Add review */}
            {type === 'restaurant-review-form' && 
              <RestaurantReview restaurantInfo={restaurantInfo} setType={setType} addReview={addReview}/>             
            }

            {/* Add restaurant */}
            {type === 'restaurant-new-form' && 
              <RestaurantAdd allRestaurants={filteredRestaurants} addRestaurant={addRestaurant} setType={setType} />
            }

            {/* Restaurant detail */}
            {type === 'restaurant-detail' && 
              <RestaurantDetail restaurantInfo={restaurantInfo} setType={setType} reviewRestaurant={reviewRestaurant}/>
            }

          </div>

        </div>
      </div>
    </div>
  )
}

