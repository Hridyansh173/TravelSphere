// src/pages/BookingPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GET_ALL_TRIPS_ENDPOINT } from '../services/api'; 
import parisImage from '../paris.jpg';
const BookingPage = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get(`${GET_ALL_TRIPS_ENDPOINT}`);
        setTrips(response.data);
      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Explore Trips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <div key={trip._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={trip.image ? `/${trip.image}` : parisImage} alt={trip.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{trip.title}</h3>
                <p className="text-gray-600 mb-4">{trip.description}</p>
                <p className="text-gray-600 mb-4">{trip.location}</p>
                <p className="text-blue-600 font-semibold text-xl mb-4">${trip.price}</p>
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
