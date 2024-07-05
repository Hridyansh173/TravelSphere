import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GET_ALL_TRIPS_ENDPOINT } from '../services/api';
import parisImage from '../paris.jpg';
import homeImage from '../homeimg1.jpg';

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
    <div
      className="booking-page min-h-screen p-8"
      style={{ backgroundImage: `url(${homeImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
    >
      <h2 className="text-5xl font-extrabold text-center text-white mb-12">Explore Enchanting Trips</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {trips.map((trip) => (
          <div
            key={trip._id}
            className="trip-card shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 bg-white bg-opacity-90 border border-gray-200"
          >
            <img
              src={trip.image ? `/${trip.image}` : parisImage}
              alt={trip.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="trip-details p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{trip.title}</h3>
              <p className="text-gray-600 mb-4">{trip.description}</p>
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-500 text-sm font-light">{trip.location}</p>
                <p className="text-gray-800 font-semibold text-lg">${trip.price}</p>
              </div>
              <button className="btn-book w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-800 text-white font-semibold">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;
