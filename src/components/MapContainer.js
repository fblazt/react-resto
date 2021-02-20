import React, { useState, useEffect } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import '../assets/map-container.css'

export default function MapContainer({allRestaurants, newRestaurantForm}) {
  const [position, setPosition] = useState()

  const containerStyle = {
    width: '100%',
    height: '100%',
  }

  const zoom = 14

  const restaurantCoordinates = []

  // allRestaurants.forEach(item => {
  //   restaurantCoordinates.push(<Marker position={item.coordinates}/>)
  //   console.log(item.coordinates)
  // })

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

  const mapClick = (mapsMouseEvent) => {
    sessionStorage.setItem('tempCoordinates', mapsMouseEvent.latLng)
    newRestaurantForm()
    console.log(sessionStorage.getItem('tempCoordinates'))
  }

  return (
    <LoadScript className="rounded-3xl" googleMapsApiKey={process.env.REACT_APP_MAPS_KEY}>
      <GoogleMap 
        id="map-container"
        mapContainerStyle={containerStyle}
        center={position}
        zoom={zoom}
        onClick={mapClick}>
          <Marker position={position} icon="https://img.icons8.com/fluent/0.5x/maps.png"/>
          {allRestaurants.map(item => {
            return (<Marker position={item.coordinates} key={item.id} icon="https://img.icons8.com/doodle/0.5x/google-maps-new.png" className="h-8 w-8"/>)
          })}
      </GoogleMap>
    </LoadScript>
  )
}