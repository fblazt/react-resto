import React, { Component, useRef, useEffect } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

import Search from './components/Search'
import RestaurantDetail from './components/RestaurantDetail' 
import RestaurantReview from './components/RestaurantReview' 
import RestaurantAdd from './components/RestaurantAdd' 

const mapStyles = {
  width: '100%',
  height: '100%'
}

export default function App() {
  const placeName = 'Jakarta'; 
  const googleMapRef = useRef();
  let googleMap;
  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAc5J06GRelgTwxtQmuAe5A0VvHdsi2sQ4&libraries=places`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", () => {
      getLatLng();
    });
  }, []);

  const createGoogleMap = (coordinates) => {
    googleMap = new window.google.maps.Map(googleMapRef.current, {
      zoom: 16,
      center: {
        lat: coordinates.lat(),
        lng: coordinates.lng(),
      }
    });
  };
  const getLatLng = () => {
    let lat, lng, placeId;
    new window.google.maps.Geocoder().geocode(
      { address: `${placeName}` },
      function (results, status) {
        if (status === window.google.maps.GeocoderStatus.OK) {
          placeId = results[0].place_id;
          createGoogleMap(results[0].geometry.location);
          lat = results[0].geometry.location.lat();
          lng = results[0].geometry.location.lng();
          new window.google.maps.Marker({
            position: { lat, lng },
            map: googleMap,
            animation: window.google.maps.Animation.DROP,
            title: `${placeName}`,
          });
        } else {
          alert(
            "Geocode was not successful for the following reason: " + status
          );
        }
      }
    );
  };
  return (
    <div className="min-h-screen min-w-full p-3 bg-gradient-to-br from-blue-200 to-green-200 flex flex-nowrap">
      <div id="google-map" ref={googleMapRef} className="w-3/4 pt-2 mt-24 ml-2 mr-3 mb-2 bg-white rounded-3xl shadow-lg">
        <div className="w-full -mt-24 flex flex-nowrap">
          <div className="h-16 w-16 bg-white rounded-3xl shadow-lg font-bold text-6xl text-center"><span>R</span></div>
          <Search></Search>
        </div>
      </div>
      <div className="max-h-screen w-1/4 my-2 ml-3 mr-2 p-2 bg-white rounded-3xl shadow-lg overflow-auto">
        <div>

          {/* Restaurant card */}
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
            <div>
              <RestaurantDetail></RestaurantDetail>
            </div>
          </div>

          {/* Add review */}
          {/* <RestaurantReview></RestaurantReview> */}

          {/* Add restaurant */}
          {/* <RestaurantAdd></RestaurantAdd> */}
        </div>
      </div>
    </div>
  )
}

