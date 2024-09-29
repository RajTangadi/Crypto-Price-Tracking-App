# Crypto Price Tracking App

A simple React application that tracks and displays cryptocurrency prices using the CoinGecko API. The app features a live line chart for visualizing the historical price data of selected cryptocurrencies.

## Features
- Fetches live cryptocurrency data from the CoinGecko API.
- Displays historical price data on an interactive line chart.
- Allows users to track cryptocurrency prices in different currencies.
- Simple and clean UI, with a responsive footer.

## Installation
1) Clone the repository
- git clone https://github.com/your-username/crypto-price-tracking-app.git
- cd crypto-price-tracking-app

2) Install the dependencies
- npm install
   
3) Start the development server
- npm start

## Development Dependencies

 1) npm install react react-dom
 2) npm install react-google-charts
 3) npm install react-icons
    
**API Reference**
This project uses the CoinGecko API to fetch live cryptocurrency market data.
Endpoint: https://api.coingecko.com/api/v3/coins/markets
Query parameters: vs_currency: The currency to show cryptocurrency prices in (e.g., usd, eur).

**Technologies Used**
**React** - A JavaScript library for building user interfaces.
**CoinGecko API** - A free API to retrieve cryptocurrency data.
**react-google-charts** - A React wrapper for Google Charts.

in this project you will learn
1. **React Basics**: 
   - How to build and organize a React component-based application.
   - Utilizing functional components, `useState`, and `useEffect` hooks.
   
2. **Context API**: 
   - Managing global state using React’s Context API for handling currency and coin data across multiple components.

3. **API Integration**: 
   - Fetching live data from an external API (CoinGecko API) and handling asynchronous operations with the `fetch` API.
   - Managing data fetched from a RESTful API and using it in the app.

4. **Data Visualization**: 
   - Using the `react-google-charts` library to display historical cryptocurrency price data in a dynamic line chart.

5. **Responsive Design**: 
   - Implementing basic UI/UX with a responsive footer and an adaptable layout for the app.
   
6. **React State Management**:
   - Handling state with hooks (`useState`, `useEffect`) to store and manipulate real-time cryptocurrency data.
   
7. **React Component Reusability**:
   - Building reusable components such as `Footer` and `LineChart` that can be used in various parts of the app.

8. **Using External Libraries**: 
   - Understanding how to install and use third-party libraries like `react-google-charts` for specific tasks like data visualization.




reference link:- https://www.youtube.com/watch?v=jZFaMEqEqEQ
