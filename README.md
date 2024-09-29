# Crypto Price Tracking App

A simple React application that tracks and displays cryptocurrency prices using the CoinGecko API. The app features a live line chart for visualizing the historical price data of selected cryptocurrencies.

## Screenshot

The homepage displays the app's title, a search bar for users to search for cryptocurrencies, and also includes dropdown functionality for searching any coins. you can toggel currency and also dynamically changed price based on currency

![Screenshot 2024-09-29 234545](https://github.com/user-attachments/assets/4868efc2-166e-44ea-999c-5ba05bd55fd2)

we are fetching top 10 cryptocurrencies in real-time, including the name, current price, and 24-hour change percentage. 
The footer is also displayed at the bottom of the page.

![Screenshot 2024-09-29 234725](https://github.com/user-attachments/assets/122d2776-9a74-4bb9-a31f-577dbc12eb5f)

after the clicking any coin it will render coin page. coin page contain chart, it shows relationship of date and price, if you toggel the currency the price value also changed

![Screenshot 2024-09-29 235802](https://github.com/user-attachments/assets/f08c973c-dfea-4fd1-93a2-8dab25860bf5)

here we show detail about crypto market rank, current price, market cap, 24 hour high, 24 hour low

![Screenshot 2024-09-29 235228](https://github.com/user-attachments/assets/66524b48-4bfb-40eb-9c05-d206aa094a7b)


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

## API Reference
This project uses the CoinGecko API to fetch live cryptocurrency market data.
Endpoint: https://api.coingecko.com/api/v3/coins/markets
Query parameters: vs_currency: The currency to show cryptocurrency prices in (e.g., usd, eur).

**Technologies Used**
React - A JavaScript library for building user interfaces.

CoinGecko API - A free API to retrieve cryptocurrency data.

react-google-charts - A React wrapper for Google Charts.

## In this project you will learn
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


**live website**: https://crypto-hunter1.netlify.app/

**reference link**: https://www.youtube.com/watch?v=jZFaMEqEqEQ
