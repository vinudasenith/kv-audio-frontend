# 🎧 KV-Audio Frontend

![App homepage](https://github.com/vinudasenith/kv-audio-frontend/blob/main/screenshots/Screenshot_3-8-2025_223423_localhost.jpeg?raw=true)

## 📖 Overview

Audio-Lights-Rent is a full-stack rental service built using the **MERN stack** (MongoDB, Express.js, React, Node.js), designed for renting audio equipment (e.g., speakers, microphones, mixers) and lighting systems (e.g., stage lights, LED panels). This repository contains the **frontend** of the application, developed with **React.js**. It provides an intuitive, responsive user interface for customers to browse equipment, book rentals, and manage bookings, alongside an admin dashboard to manage inventory, users, and orders.

## ✨  Features

### 👤  User Features
- **Browse Equipment**: Explore available audio equipment (e.g., speakers, microphones, mixers) and lighting systems (e.g., stage lights, LED panels) with details like model, specifications, rental price, and availability.
- **Book Equipment**: Select equipment, choose rental dates, and confirm bookings seamlessly.
- **Review Management**: Submit reviews and ratings for rented equipment to share feedback.
- **Booking Management**: View and manage  bookings.
- **User Authentication**: Secure login and registration using JWT-based authentication.
- **Responsive Design**: Optimized for desktop and mobile devices.

### 🛠️ Admin Features
- **Equipment Management**: Add, update, or remove audio and lighting equipment from the inventory.
- **User Management**: View, block, or unblock users.
- **Review Management**: Approve, block, or activate user reviews to ensure quality and relevance.
- **Order Management**: Confirm or cancel user bookings.
- **Dashboard**: Centralized interface to monitor and manage all operations.

## 🧪 Technologies Used
- **React.js**: Frontend library for building dynamic user interfaces.
- **Axios**: For making HTTP requests to the backend API.
- **React Router**: For client-side routing and navigation.
- **Tailwind CSS**: For modern, responsive styling.
- **JWT**: For secure user authentication.

## 🧰 Prerequisites
- **Node.js**: v16.x or higher
- **npm**: v8.x or higher
- Access to the Audio-Lights-Rent backend API (ensure the backend server is running)

## ⚙️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/vinudasenith/audio-lights-rent-frontend.git
   cd audio-lights-rent-frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   VITE_BACKEND_URL=http://localhost:3000/api
   ```
   Replace `http://localhost:3000/api` with the URL of your backend API.

4. **Run the Application**
   ```bash
   npm run dev
   ```
   The application will run at `http://localhost:5173`.

5. **Build for Production**
   ```bash
   npm run build
   ```
   This generates a production-ready build in the `build` folder.

## 🗂️ Project Structure
```
KV-AUDIO-FRONTEND/
├── public/                 # Static assets (e.g., images, favicon)
├── src/
│   ├── components/        # Reusable React components
│   ├── pages/             # Page components (e.g., Home, EquipmentList, Booking)
│   ├── utils/             # Store setup and reusable state logic
│   ├── App.css          
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
├── .env                   # Environment variables
├── package.json           # Project dependencies and scripts

```

## 📜 Available Scripts
- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `build` folder.

## 🪪  License
This project is licensed under the [MIT License](LICENSE).

##  📸 Screenshots of webpage
![product overview page](https://github.com/vinudasenith/kv-audio-frontend/blob/main/screenshots/Screenshot_3-8-2025_223447_localhost.jpeg)
![contact page](https://github.com/vinudasenith/kv-audio-frontend/blob/main/screenshots/Screenshot_3-8-2025_22355_localhost.jpeg)
![gallery page](https://github.com/vinudasenith/kv-audio-frontend/blob/main/screenshots/Screenshot_3-8-2025_223455_localhost.jpeg)
![admin item page](https://github.com/vinudasenith/kv-audio-frontend/blob/main/screenshots/Screenshot_5-8-2025_182427_localhost.jpeg)
![admin user page](https://github.com/vinudasenith/kv-audio-frontend/blob/main/screenshots/Screenshot_5-8-2025_182434_localhost.jpeg)
![admin review](https://github.com/vinudasenith/kv-audio-frontend/blob/main/screenshots/Screenshot_5-8-2025_182443_localhost.jpeg)
![admin add item page](https://github.com/vinudasenith/kv-audio-frontend/blob/main/screenshots/Screenshot_5-8-2025_182453_localhost.jpeg)
