import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  TrendingDown, 
  DollarSign,
  BarChart3,
  Zap,
  Clock
} from 'lucide-react';
import TokenCard from '../components/TokenCard';

const Trading: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('volume');

  // Mock trading data
  const tokens = [
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
    {
      id: '4',
      name: 'Cat Coin',
      symbol: 'MEOWTO',
      price: 0.000456,
      change24h: 78.90,
      marketCap: 5400000,
      volume24h: 890000,
      holders: 2100,
      image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=100',
      isVerified: true,
      riskScore: 'low' as const,
      launchedAt: '2024-01-22',
    },
    {
      id: '5',
      name: 'Frog Token',
      symbol: 'FROGGY',
      price: 0.000123,
      change24h: -5.67,
      marketCap: 1200000,
      volume24h: 234000,
      holders: 890,
      image: 'https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg?auto=compress&cs=tinysrgb&w=100',
      isVerified: false,
      riskScore: 'high' as const,
      launchedAt: '2024-01-25',
    },
    {
      id: '6',
      name: 'Diamond Hands',
      symbol: 'DIAMOND',
      price: 0.000789,
      change24h: 234.56,
      marketCap: 12300000,
      volume24h: 3400000,
      holders: 4500,
      image: 'https://images.pexels.com/photos/1340984/pexels-photo-1340984.jpeg?auto=compress&cs=tinysrgb&w=100',
      isVerified: true,
      riskScore: 'low' as const,
      launchedAt: '2024-01-12',
    },
  ];

  const tradingStats = [
    { label: '24h Volume', value: '$12.4M', icon: DollarSign, color: 'text-green-400' },
    { label: 'Active Pairs', value: '847', icon: BarChart3, color: 'text-blue-400' },
    { label: 'Avg. Gas Fee', value: '0.001 TON', icon: Zap, color: 'text-yellow-400' },
    { label: 'Avg. Trade Time', value: '2.3s', icon: Clock, color: 'text-purple-400' },
  ];

  const filteredTokens = tokens.filter(token => {
    const matchesSearch = token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         token.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedFilter === 'all') return matchesSearch;
    if (selectedFilter === 'verified') return matchesSearch && token.isVerified;
    if (selectedFilter === 'gainers') return matchesSearch && token.change24h > 0;
    if (selectedFilter === 'losers') return matchesSearch && token.change24h < 0;
    
    return matchesSearch;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'volume':
        return b.volume24h - a.volume24h;
      case 'marketcap':
        return b.marketCap - a.marketCap;
      case 'change':
        return b.change24h - a.change24h;
      case 'holders':
        return b.holders - a.holders;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Trading Hub</h1>
          <p className="text-gray-400 text-lg">Discover and trade the hottest memecoins on TON</p>
        </div>

        {/* Trading Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {tradingStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center"
              >
                <Icon className={`h-8 w-8 ${stat.color} mx-auto mb-4`} />
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Filters and Search */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search tokens by name or symbol..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Tokens</option>
                <option value="verified">Verified Only</option>
                <option value="gainers">Top Gainers</option>
                <option value="losers">Top Losers</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="volume">Sort by Volume</option>
                <option value="marketcap">Sort by Market Cap</option>
                <option value="change">Sort by 24h Change</option>
                <option value="holders">Sort by Holders</option>
              </select>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => setSelectedFilter('gainers')}
              className="px-3 py-1 bg-green-600/20 border border-green-500/30 text-green-400 rounded-full text-sm hover:bg-green-600/30 transition-colors"
            >
              🚀 Top Gainers
            </button>
            <button
              onClick={() => setSelectedFilter('verified')}
              className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-full text-sm hover:bg-blue-600/30 transition-colors"
            >
              ✅ Verified
            </button>
            <button
              onClick={() => setSortBy('volume')}
              className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 text-purple-400 rounded-full text-sm hover:bg-purple-600/30 transition-colors"
            >
              📊 High Volume
            </button>
            <button
              onClick={() => setSearchTerm('moon')}
              className="px-3 py-1 bg-yellow-600/20 border border-yellow-500/30 text-yellow-400 rounded-full text-sm hover:bg-yellow-600/30 transition-colors"
            >
              🌙 Moon Tokens
            </button>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-gray-400">
            Showing {filteredTokens.length} of {tokens.length} tokens
          </div>
          
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-green-400" />
            <span className="text-sm text-gray-400">Market is up 12.4% today</span>
          </div>
        </div>

        {/* Token Grid */}
        {filteredTokens.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTokens.map((token) => (
              <TokenCard key={token.id} token={token} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No tokens found</div>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Trading Tips */}
        <div className="mt-12 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 border border-primary-500/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Trading Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-yellow-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Start Small</h4>
              <p className="text-gray-300 text-sm">Begin with small amounts to understand market dynamics before increasing your position size.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-blue-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Research First</h4>
              <p className="text-gray-300 text-sm">Always check the audit score, liquidity lock, and community activity before trading.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-green-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Set Limits</h4>
              <p className="text-gray-300 text-sm">Use stop-loss orders and take-profit levels to manage risk and secure gains.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trading;