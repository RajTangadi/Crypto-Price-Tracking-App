# Crypto Price Tracking App

A simple React application that tracks and displays cryptocurrency prices using the CoinGecko API. The app features a live line chart for visualizing the historical price data of selected cryptocurrencies.

**## Features**
- Fetches live cryptocurrency data from the CoinGecko API.
- Displays historical price data on an interactive line chart.
- Allows users to track cryptocurrency prices in different currencies.
- Simple and clean UI, with a responsive footer.

 ## Project Structure
├── components/
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── LineChart/
│   │   └── LineChart.jsx
│   ├── Navbar/
│   │   └── Navbar.jsx
├── context/
│   └── CoinContext.jsx
├── pages/
│   ├── Coin/
│   │   ├── Coin.jsx
│   │   └── Coin.css
│   ├── Home/
│   │   ├── Home.jsx
│   │   └── Home.css
├── App.js
└── index.js


**Installation**
1) Clone the repository
-- git clone https://github.com/your-username/crypto-price-tracking-app.git
-- cd crypto-price-tracking-app

2) Install the dependencies
-- npm install
   
3) Start the development server
-- npm start

** Development Dependencies**

 1) npm install react react-dom
 2) npm install react-google-charts
 3) npm install react-icons
    
**API Reference**
This project uses the CoinGecko API to fetch live cryptocurrency market data.
Endpoint: https://api.coingecko.com/api/v3/coins/markets
Query parameters:
vs_currency: The currency to show cryptocurrency prices in (e.g., usd, eur).

**Technologies Used**
React - A JavaScript library for building user interfaces.
CoinGecko API - A free API to retrieve cryptocurrency data.
react-google-charts - A React wrapper for Google Charts.

reference link:- https://www.youtube.com/watch?v=jZFaMEqEqEQ
