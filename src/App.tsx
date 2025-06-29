import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import LaunchToken from './pages/LaunchToken';
import TokenDetail from './pages/TokenDetail';
import Trading from './pages/Trading';
import Leaderboards from './pages/Leaderboards';
import AdminDashboard from './pages/AdminDashboard';
import { WalletProvider } from './contexts/WalletContext';

function App() {
  return (
    <WalletProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          <Navbar />
          <div className="flex relative z-10">
            <Sidebar />
            <main className="flex-1 ml-0 lg:ml-64 pt-16 sm:pt-18 min-h-screen">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/launch" element={<LaunchToken />} />
                <Route path="/token/:id" element={<TokenDetail />} />
                <Route path="/trading" element={<Trading />} />
                <Route path="/leaderboards" element={<Leaderboards />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </WalletProvider>
  );
}

export default App;