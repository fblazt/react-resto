import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

export default function MapContainer({allRestaurants}) {
  console.log(allRestaurants)
  const [position, setPosition] = useState({})

  const containerStyle = {
    width: '100%',
    height: '100%',
  }

  const zoom = 16

  const restaurantCoordinates = []

  // allRestaurants.forEach(item => {
  //   restaurantCoordinates.push(<Marker position={item.coordinates}/>)
  //   console.log(item.coordinates)
  // })

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
  }function getPosition(position) {
    let userPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    }
    setPosition(userPosition);
  }

  return (
    <div className="h-full w-full rounded-3xl">
      <LoadScript className="rounded-3xl" googleMapsApiKey={process.env.REACT_APP_MAPS_KEY}>
        <GoogleMap 
        className="rounded-3xl"
        mapContainerStyle={containerStyle}
        center={position}
        zoom={zoom}>
          <Marker
          position={position}/>
          {/* {allRestaurants.map(item => {
            return (<Marker position={item.coordinates}/>)
          })} */}
          {/* {restaurantCoordinates} */}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}