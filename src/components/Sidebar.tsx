import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Rocket, 
  TrendingUp, 
  Trophy, 
  Settings,
  DollarSign,
  Shield,
  Users,
  Sparkles
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: Home, label: 'Home', emoji: '🏠' },
    { path: '/launch', icon: Rocket, label: 'Launch Token', emoji: '🚀' },
    { path: '/trading', icon: DollarSign, label: 'Trading', emoji: '💰' },
    { path: '/leaderboards', icon: Trophy, label: 'Leaderboards', emoji: '🏆' },
    { path: '/admin', icon: Shield, label: 'Admin Panel', emoji: '🛡️' },
  ];

  return (
    <div className="fixed left-0 top-16 sm:top-18 h-full w-64 bg-gradient-to-b from-indigo-600/90 via-purple-600/90 to-pink-600/90 backdrop-blur-xl border-r-4 border-white/20 hidden lg:block z-40 shadow-2xl">
      <div className="p-4 sm:p-6">
        <nav className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 group ${
                  isActive
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-xl scale-105'
                    : 'text-white/90 hover:bg-white/20 hover:text-white hover:shadow-lg'
                }`}
              >
                <span className="text-2xl group-hover:animate-bounce">{item.emoji}</span>
                <Icon className="h-5 w-5 group-hover:animate-pulse" />
                <span className="font-bold group-hover:text-yellow-100">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 p-6 bg-gradient-to-br from-green-500/30 to-blue-500/30 rounded-3xl border-2 border-white/30 backdrop-blur-sm shadow-xl">
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-yellow-300 animate-pulse" />
            <span className="text-lg font-black text-white">Market Magic ✨</span>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center bg-white/10 rounded-xl p-3">
              <span className="text-white/90 font-semibold">Total Tokens:</span>
              <span className="text-yellow-300 font-black text-lg">1,247 🎯</span>
            </div>
            <div className="flex justify-between items-center bg-white/10 rounded-xl p-3">
              <span className="text-white/90 font-semibold">24h Volume:</span>
              <span className="text-green-300 font-black text-lg">$2.1M 💰</span>
            </div>
            <div className="flex justify-between items-center bg-white/10 rounded-xl p-3">
              <span className="text-white/90 font-semibold">Active Users:</span>
              <span className="text-blue-300 font-black text-lg">5,432 👥</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;