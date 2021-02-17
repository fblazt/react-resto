import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Search from './components/Search'
import RestaurantCard from './components/RestaurantCard' 
import RestaurantDetail from './components/RestaurantDetail' 
import RestaurantReview from './components/RestaurantReview' 
import RestaurantAdd from './components/RestaurantAdd' 
import MapContainer from './components/MapContainer'  

export default function App() {
  // const [position, setPosition ] = useState({})
  const [type, setType] = useState(1)
  const [allRestaurants, setAllRestaurants] = useState([])
  const [restaurantInfo, setRestaurantInfo] = useState({})

  let localRestaurants = [
    {
      id: -2,
      name: 'Bakery',
      coordinates: {
        lat: -6.151353501429153,
        lng: 106.781478421907
      },
      address: 'Jalan Taman Ratu Raya CC1 No.53, RT.4/RW.13, Kedoya Utara',
      pict:'https://lh5.googleusercontent.com/p/AF1QipMfCQ-dXE9EqgiWkJr9QQRshjKpDmPAjzWel7fE=w408-h305-k-no',
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
    },
    {
      id: -1,
      name: 'Soup',
      coordinates: {
        lat: -6.154255057375307,
        lng: 106.77551311782378
      },
      address: 'Jalan Pesing Poglar RT.9/RW.5, Kedaung Kali Angke',
      pict:'https://lh5.googleusercontent.com/p/AF1QipMfCQ-dXE9EqgiWkJr9QQRshjKpDmPAjzWel7fE=w408-h305-k-no',
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
  ]

  // if (navigator.geolocation) {
  //   const getPosition = (position) => {
  //     let userPosition = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude,
  //     }
  //     setPosition(userPosition);
  //   }
  //   navigator.geolocation.getCurrentPosition(getPosition);
  // } else {
  //   console.log('No navigator geolocation')
  // }

  useEffect (() => {
    // if (position) {
      // console.log(`Position: ${position}`)
      axios.get(`${process.env.REACT_APP_CORS_HANDLER}https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-6.1559542,106.76955970000002&radius=2000&type=restaurant&key=
      ${process.env.REACT_APP_MAPS_KEY}`)
      .then(res => {
        // console.log(res)
        let data = res.data.results
        let googleRestaurants = data.map((item,index) =>{     
          return   {
            id: index,
            name: item.name,
            address: item.vicinity,
            coordinates: {
              lat: item.geometry.location.lat,
              lng: item.geometry.location.lng,
            },
            pict:`https://maps.googleapis.com/maps/api/streetview?size=400x250&location=${item.geometry.location.lat},${item.geometry.location.lng}&heading=70&pitch=0&key=${process.env.REACT_APP_MAPS_KEY}`,
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
        })
        setAllRestaurants(allRestaurants.concat(googleRestaurants))
        // console.log(`Google restaurants: ${googleRestaurants}`)
      //  console.log(jsonRestaurant)
      //   jsonRestaurant = jsonRestaurant.concat(newArr)
      //   jsonRestaurant.map((item)=>{
      //     let rating = 0;
      //     item.ratings.forEach((review)=>{
      //       rating += review.stars
      //     })
      //     rating = rating/item.ratings.length;
      //     item.rating = Math.round(rating)
      //     return item
      //   })
      //    setRestaurant(jsonRestaurant) ;
      //   //  updatingthe filter restaurant
      //   setFilterRestaurants(jsonRestaurant)
      //   console.log(jsonRestaurant)
      })
      .catch(err => {
        console.log(err)
      })
    // }
  }, [])


  const changeComponent = (type) => {
    setType(type)
  }

  const newRestaurantForm = () => {
    setType(3)
  }

  const addRestaurant = (data) => {
    let existingRestaurants = [...allRestaurants]
    existingRestaurants.push(data)
    setAllRestaurants(existingRestaurants)
    setType(1)
  }

  const restaurantDetail= (id) => {
    let restaurant = allRestaurants.filter(restaurant => restaurant.id === id)
    setRestaurantInfo(restaurant[0])
    setType(4)
    // console.log(restaurant)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-green-400 flex">
      <div className="min-h-screen flex-1">
        <div className="min-h-screen p-3 grid grid-cols-12 grid-rows-6">
          <div className="mr-2 mb-2 col-span-1 bg-white shadow-lg rounded-3xl flex items-center justify-center font-bold text-6xl"><span>R</span></div>
          <div className="ml-2 mr-2 mb-2 col-span-8 rounded-3xl">
            <Search/>
          </div>  
          <div className="ml-2 p-2 col-span-3 row-span-6 bg-white shadow-lg rounded-3xl">

            {/* Restaurant list */}
            {type === 1 &&
              <div>
                <div className="w-full flex flex-row items-end content-end">
                  <div className="mb-3">
                    <label htmlFor="filter">Filter by rate</label>
                    <select name="filter" id="filter" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
                <div className="overflow-y-auto max-h-screen">
                  {allRestaurants.map(restaurant => {
                    return (
                      <RestaurantCard key={restaurant.id} restaurantInfo={restaurant} restaurantDetail={restaurantDetail}></RestaurantCard>
                    )
                  })}
                </div>
              </div>
            }

            {/* Add review */}
            {type === 2 && 
              <RestaurantReview/>             
            }

            {/* Add restaurant */}
            {type === 3 && 
              <RestaurantAdd allRestaurants={allRestaurants} addRestaurant={addRestaurant} setType={setType} />
            }

            {/* Restaurant detail */}
            {type === 4 && 
              <RestaurantDetail restaurantInfo={restaurantInfo} setType={setType} />
            }

          </div>

          <div className="mt-2 mr-2 col-span-9 row-span-6 bg-white shadow-lg rounded-3xl">
            <MapContainer allRestaurants={allRestaurants} newRestaurantForm={newRestaurantForm}/>
          </div>
        </div>
      </div>
    </div>
  )
}

