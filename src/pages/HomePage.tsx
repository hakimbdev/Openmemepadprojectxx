import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  TrendingUp, 
  Shield, 
  Users, 
  DollarSign,
  Search,
  Filter,
  ArrowRight,
  Star,
  Zap,
  Sparkles,
  Heart
} from 'lucide-react';
import TokenCard from '../components/TokenCard';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('trending');

  // Mock data for demonstration
  const trendingTokens = [
    {
      id: '1',
      name: 'Doge Moon',
      symbol: 'DMOON',
      price: 0.000234,
      change24h: 45.67,
      marketCap: 2300000,
      volume24h: 567000,
      holders: 1250,
      image: 'https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=100',
      isVerified: true,
      riskScore: 'low' as const,
      launchedAt: '2024-01-15',
    },
    {
      id: '2',
      name: 'Pepe Rocket',
      symbol: 'PROCKET',
      price: 0.001567,
      change24h: -12.34,
      marketCap: 8900000,
      volume24h: 1200000,
      holders: 3400,
      image: 'https://images.pexels.com/photos/8919533/pexels-photo-8919533.jpeg?auto=compress&cs=tinysrgb&w=100',
      isVerified: false,
      riskScore: 'medium' as const,
      launchedAt: '2024-01-20',
    },
    {
      id: '3',
      name: 'Shiba Moon',
      symbol: 'SHIMOON',
      price: 0.000089,
      change24h: 123.45,
      marketCap: 15600000,
      volume24h: 2300000,
      holders: 5670,
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=100',
      isVerified: true,
      riskScore: 'low' as const,
      launchedAt: '2024-01-18',
    },
  ];

  const stats = [
    { label: 'Total Tokens Launched', value: '1,247', icon: Rocket, color: 'text-blue-400', emoji: '🚀' },
    { label: '24h Trading Volume', value: '$2.1M', icon: DollarSign, color: 'text-green-400', emoji: '💰' },
    { label: 'Active Traders', value: '5,432', icon: Users, color: 'text-purple-400', emoji: '👥' },
    { label: 'Successful Launches', value: '892', icon: TrendingUp, color: 'text-orange-400', emoji: '📈' },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-18">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-500/30 to-blue-500/30" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border-2 border-white/20">
                <Sparkles className="h-5 w-5 text-yellow-300 animate-pulse" />
                <span className="text-white font-bold text-sm">Welcome to the Meme Revolution!</span>
                <Heart className="h-5 w-5 text-pink-400 animate-pulse" />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Launch Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-pulse">
                {' '}Memecoin{' '}
              </span>
              on TON! 🚀
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto font-semibold leading-relaxed">
              The ultimate decentralized launchpad for meme tokens! 🎯 Create, trade, and discover 
              the next viral cryptocurrency on the TON blockchain. Join the fun! 🎉
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/launch"
                className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white px-6 py-4 sm:px-8 sm:py-4 rounded-full font-black text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <Rocket className="h-6 w-6 animate-bounce" />
                <span>Launch Token 🚀</span>
              </Link>
              <Link
                to="/trading"
                className="bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 text-white px-6 py-4 sm:px-8 sm:py-4 rounded-full font-black text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <TrendingUp className="h-6 w-6 animate-bounce" />
                <span>Start Trading 💰</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-4 sm:p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
              >
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="text-3xl sm:text-4xl group-hover:animate-bounce">{stat.emoji}</span>
                  <Icon className={`h-6 w-6 sm:h-8 sm:w-8 ${stat.color} group-hover:animate-pulse`} />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-white/80 font-semibold text-sm sm:text-base">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trending Tokens Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
              Trending Tokens 🔥
            </h2>
            <p className="text-white/80 font-semibold">Discover the hottest memecoins right now! 🌶️</p>
          </div>
          <Link
            to="/leaderboards"
            className="text-yellow-400 hover:text-yellow-300 font-black flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border-2 border-yellow-400/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <span>View All 👀</span>
            <ArrowRight className="h-4 w-4 animate-bounce" />
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
            <input
              type="text"
              placeholder="Search tokens... 🔍"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-400 font-semibold"
            />
          </div>
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="px-4 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full text-white focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-400 font-semibold min-w-[140px]"
          >
            <option value="trending">🔥 Trending</option>
            <option value="newest">🆕 Newest</option>
            <option value="volume">📊 Top Volume</option>
            <option value="gainers">🚀 Top Gainers</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {trendingTokens.map((token) => (
            <TokenCard key={token.id} token={token} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="bg-gradient-to-br from-purple-600/30 via-pink-500/30 to-blue-500/30 backdrop-blur-xl border-4 border-white/20 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="text-6xl sm:text-8xl animate-bounce">🚀</div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Launch Your Memecoin? 🎯
          </h2>
          <p className="text-white/90 text-lg sm:text-xl mb-8 max-w-2xl mx-auto font-semibold leading-relaxed">
            Join thousands of creators who have successfully launched their tokens on Open Memepad! 🎉 
            No coding required - just your creativity! ✨
          </p>
          <Link
            to="/launch"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white px-6 py-4 sm:px-8 sm:py-4 rounded-full font-black text-lg sm:text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
          >
            <Rocket className="h-6 w-6 animate-bounce" />
            <span>Get Started Now 🎉</span>
            <Sparkles className="h-6 w-6 animate-pulse" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;