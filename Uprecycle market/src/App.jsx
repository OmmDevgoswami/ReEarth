import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/NavigatioN';
import HomePage from './components/HomePage';
import MarketplacePage from './components/MarketplacePage';
import ScrapCollectionPage from './components/ScrapCollectionPage';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/scrap-collection" element={<ScrapCollectionPage />} />
          </Routes>
        </main>
        <footer className="bg-green-500 text-white p-4 text-center">
          <p>&copy; 2024 RecycleMarketplace. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}