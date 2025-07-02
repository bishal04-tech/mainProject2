## Movie Ticket Booking System

A full-stack web application for booking movie tickets, featuring a React/Vite front-end and a Node.js/Express back-end with MongoDB for data storage. The project includes user authentication via Clerk, real-time bookings, admin dashboard for managing movies and shows, and automated workflows with Inngest.

---

### Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Prerequisites](#prerequisites)
* [Project Structure](#project-structure)
* [Installation](#installation)
* [Environment Variables](#environment-variables)
* [Running the Application](#running-the-application)
* [Usage](#usage)
* [Admin Dashboard](#admin-dashboard)
* [Deployment](#deployment)


---

### Features

* **User Authentication**: Sign up and Log in using Clerk.dev
* **Movie Listings**: Browse available movies with showtimes
* **Real-time Booking**: Select seats and book tickets instantly
* **Admin Panel**: Add, edit, and remove movies and showtimes
* **Automated Workflows**: Sync user creation events with Inngest
* **Responsive Design**: Mobile-first UI built with React and Tailwind CSS

---

### Tech Stack

* **Front-end**: React, Vite, Tailwind CSS, Clerk.js
* **Back-end**: Node.js, Express.js, Inngest
* **Database**: MongoDB (MongoDB Atlas)
* **Authentication**: Clerk.dev
* **Deployment**: Vercel (both client and server)

---

### Prerequisites

* Node.js >= 16.x
* npm or yarn
* MongoDB Atlas account
* Clerk.dev account

---

### Project Structure

```
mainProject2/
├── client/            # React front-end (Vite)
│   ├── public/        # Static assets
│   ├── src/           # React source files
│   ├── .env           # Front-end environment variables
│   ├── package.json
│   └── vite.config.js
├── server/            # Express back-end
│   ├── configs/       # DB configuration
│   ├── modals/        # Mongoose models
│   ├── inngest/       # Inngest functions
│   ├── .env           # Back-end environment variables
│   ├── server.js
│   └── package.json
└── .gitignore
```

---

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/mainProject2.git
cd mainProject2
```

2. **Install dependencies**

```bash
# Front-end
cd client
npm install

# Back-end
cd ../server
npm install
```

---

### Environment Variables

Create `.env` files in both `client/` and `server/` folders with the following variables:

#### client/.env

```
VITE_CURRENCY="$"
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

#### server/.env

```
MONGODB_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
INNGEST_WEBHOOK_SECRET=your_inngest_webhook_secret
```

> **Note:** Never commit `.env` files with real credentials to version control.

---

### Running the Application

1. **Start the back-end**

```bash
cd server
npm run dev
```

2. **Start the front-end** (in a separate terminal)

```bash
cd client
npm run dev
```

The front-end will run on `http://localhost:5173` and the back-end on `http://localhost:3000` by default.

---

### Usage

* **User Flow**: Users can sign up, browse movies, select seats, and confirm bookings.
* **Admin Flow**: Admins can log in via a special Clerk role, access the admin dashboard, and manage movies and showtimes.

---

### Admin Dashboard

Access the admin panel at `http://localhost:5173/admin`. Use your Clerk admin credentials to log in. Features include:

* Add new movies with posters, descriptions, and durations
* Schedule new shows with date, time, and available seats
* View and manage existing bookings

---

### Deployment

* **Vercel**: Both client and server can be deployed to Vercel. Refer to [Vercel Docs](https://vercel.com/docs) for setup.

---

