TravelSphere
Welcome to TravelSphere, your ultimate travel companion! TravelSphere is a web application where users can book holiday trips and read engaging travel-related blogs. Explore beautiful destinations, book your dream vacation, and get inspired by our curated travel stories.

Features
Trip Booking: Browse and book holiday trips to various destinations with detailed descriptions and images.
Travel Blogs: Read travel-related blogs to get inspiration for your next adventure.
Table of Contents
Features
Installation
Usage
API Endpoints
Frontend Structure
Technologies Used
Contributing
License
Installation
git clone https://github.com/yourusername/travelsphere.git
Navigate to the project directory:
cd travelsphere
Install backend dependencies:
cd backend
npm install
Install frontend dependencies:

cd ../frontend

npm install

Usage

Running the Backend

Navigate to the backend directory:

Start the backend server:

npm start

Running the Frontend

Navigate to the frontend directory:

cd ../frontend

Start the frontend development server:

npm start

Open your browser and go to http://localhost:5000.

API Endpoints

User Authentication

POST /api/auth/register - Register a new user

POST /api/auth/login - Login a user

Trips

GET /api/trips - Get all trips

POST /api/trips - Add a new trip (Admin only)

GET /api/trips/:id - Get trip details by ID

Frontend Structure

src/components - Contains reusable components like Navbar, Footer, etc.

src/pages - Contains page components like HomePage, AboutPage, BookingPage, ContactUsPage, TripDetails, etc.

src/App.js - Main application file with routing setup

Technologies Used

Frontend: React, Tailwind CSS

Backend: Node.js, Express, MongoDB, JWT for authentication, bcrypt for password hashing, Mongoose for database interaction

Deployment: Vercel (backend), Netlify (frontend)

Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.
