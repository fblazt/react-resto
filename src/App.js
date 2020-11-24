import React from 'react'
import Search from './components/Search'
import RestaurantDetail from './components/RestaurantDetail' 
import RestaurantReview from './components/RestaurantReview' 

export default function App() {
  return (
    <div className="min-h-screen min-w-full p-3 bg-gradient-to-br from-blue-200 to-green-200 flex flex-nowrap">
      <div className="w-3/4 pt-2 mt-24 ml-2 mr-3 mb-2 bg-white rounded-3xl shadow-lg">
        <div className="w-full -mt-24 flex flex-nowrap">
          <div className="h-16 w-16 bg-white rounded-3xl shadow-lg font-bold text-6xl text-center"><span>R</span></div>
          <Search></Search>
        </div>
      </div>
      <div className="max-h-screen w-1/4 my-2 ml-3 mr-2 p-2 bg-white rounded-3xl shadow-lg overflow-auto">
        <div>

          {/* Restaurant card */}
          {/* <RestaurantDetail></RestaurantDetail> */}

          {/* Add review */}
          <RestaurantReview></RestaurantReview>
        </div>
      </div>
    </div>
  )
}

