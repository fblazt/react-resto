import React from 'react'
import { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import ScriptLoaded from '../../docs/ScriptLoaded'

export default function MapContainer() {
  const [position, setPosition] = useState({})

  const containerStyle = {
    width: '100%',
    height: '100%',
  }

  const center = {
    lat: 6,
    lng: 3
  }

  const zoom = 16

  const restaurantCoordinates = []
  
  const restaurants = [
    {
      name: 'Bakery',
      coordinates: {
        lat: -6.151353501429153,
        lng: 106.781478421907
      }
    },
    {
      name: 'Soup',
      coordinates: {
        lat: -6.154255057375307,
        lng: 106.77551311782378
      }
    }
  ]

  restaurants.forEach(item => {
    restaurantCoordinates.push(<Marker position={item.coordinates}/>)
  });

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
          {restaurantCoordinates}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}