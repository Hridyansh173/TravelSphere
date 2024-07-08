// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import GuestAccessPage from './pages/GuestAccessPage';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ContactUsPage from './pages/ContactUsPage';
import ErrorPage from './components/ErrorPage';
import TripDetailsPage from './pages/TripDetailsPage';
import TravelBlogsPage from './pages/TravelBlogsPage';
import CustomerPage from './pages/CustomerPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/guest-access" element={<GuestAccessPage />} />
          <Route path="/home" element={
            <>
              <Navbar />
              <HomePage />
              <Footer />
            </>
          } />
          <Route path="/booking" element={
            <>
              <Navbar />
              <BookingPage />
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Navbar />
              <ContactUsPage />
              <Footer />
            </>
          } />
          <Route path="/trips/:id" element={
            <>
              <Navbar />
              <TripDetailsPage />
              <Footer />
            </>
          } />
          <Route path="/travel-blogs" element={
            <>
              <Navbar />
              <TravelBlogsPage />
              <Footer />
            </>
          } />
          <Route path="/customer/:id" element={
            <>
              <Navbar />
              <CustomerPage />
              <Footer />
            </>
          } />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
