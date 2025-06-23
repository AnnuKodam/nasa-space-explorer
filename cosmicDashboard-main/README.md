# 🚀 NASA Space Data Explorer

Welcome to the NASA Space Data Explorer – a full-stack web application built with **React**, **Node.js**, and **Express** that allows users to interactively explore data from NASA's open APIs. The app fetches data such as the **Astronomy Picture of the Day (APOD)** and **Mars Rover Photos**, displaying it through an engaging and visually appealing user interface.

## 🌌 Live Demo

🔗 [Live App URL Here]  
🔗 [GitHub Repository Here]

---

## 📁 Project Structure

```
├── frontend/            # React frontend
├── backend/             # Node.js + Express backend
└── README.md            # Project documentation
```

---

## 🧰 Tech Stack

- **Frontend**: React, Axios, Chart.js , Tailwind CSS , Tanstack React Query
- **Backend**: Node.js, Express
- **API**: [NASA Open APIs](https://api.nasa.gov/)
- **Deployment**: Vercel

---

## 🚀 Features

- 🌠 Browse **Astronomy Picture of the Day**
- 🤖 View **Mars Rover Photos** by date and rover
- 📊 Visualize space data using charts or galleries
- 🧭 Responsive design for all screen sizes
- 🧪 Error handling, loading states, and clean UI

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/nasa-space-explorer.git
cd nasa-space-explorer
```

### 2. Setup NASA API Key

Register for a free NASA API key from [https://api.nasa.gov](https://api.nasa.gov).

Add your key to the `.env` file in `backend/` directory:

**backend/.env**

```
NASA_API_KEY=your_api_key_here
PORT=5000
```

---

## 📦 Backend Setup

### Navigate to backend and install dependencies

```bash
cd backend
npm install
```

### Run the server

```bash
npm start
```

The server runs on `http://localhost:5000` and handles API requests to NASA.

---

## 💻 Frontend Setup

### Navigate to frontend and install dependencies

```bash
cd frontend
npm install
```

### Run the React app

```bash
npm start
npm run dev
```

The app will open in your default browser at `http://localhost:5173/`.

---

## ✨ Usage

- Go to the homepage to view today's Astronomy Picture of the Day.
- Navigate through Mars Rover photos using filters like date and rover name.
- Use visualizations to understand space data more intuitively.

---

## 🙌 Acknowledgements

- [NASA Open APIs](https://api.nasa.gov/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

---

## 🧠 Future Improvements

- Add more NASA endpoints like EPIC, NeoWs
- Implement user search and bookmarking features
- Introduce animations and richer visual storytelling
- Add tests and performance optimizations

---

## 📫 Contact

For any questions or suggestions, feel free to contact Anuhya Kodam at anuhyakodamir25@gmail.com.
