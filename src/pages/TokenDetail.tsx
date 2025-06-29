import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  Shield, 
  ExternalLink,
  Twitter,
  MessageCircle,
  Globe,
  Copy,
  AlertTriangle,
  CheckCircle,
  Star
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TokenDetail: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('chart');

  // Mock data - in real app this would come from API
  const tokenData = {
    id: '1',
    name: 'Doge Moon',
    symbol: 'DMOON',
    price: 0.000234,
    change24h: 45.67,
    marketCap: 2300000,
    volume24h: 567000,
    holders: 1250,
    maxSupply: 1000000000,
    circulatingSupply: 750000000,
    image: 'https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=200',
    contractAddress: 'EQBvI0aFLnw2QbZgjMPCLRdtRHxhUyinQudg6sdiohIwg5jL',
    isVerified: true,
    riskScore: 'low' as const,
    description: 'DMOON is the first community-driven meme token on TON blockchain, combining the power of DeFi with the fun of memes. Join our mission to the moon!',
    website: 'https://dogemoon.ton',
    twitter: '@DogemoonTON',
    telegram: 't.me/dogemoonofficial',
    launchedAt: '2024-01-15',
    buyTax: 3,
    sellTax: 3,
    liquidityLocked: true,
    auditScore: 95,
  };

  const chartData = [
    { time: '00:00', price: 0.000180 },
    { time: '04:00', price: 0.000195 },
    { time: '08:00', price: 0.000210 },
    { time: '12:00', price: 0.000225 },
    { time: '16:00', price: 0.000240 },
    { time: '20:00', price: 0.000234 },
  ];

  const formatNumber = (num: number) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(tokenData.contractAddress);
    // Show toast notification in real app
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-400 bg-green-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'high': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
              <img
                src={tokenData.image}
                alt={tokenData.name}
                className="w-16 h-16 rounded-full border-2 border-gray-600"
              />
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <h1 className="text-2xl font-bold text-white">{tokenData.name}</h1>
                  <span className="text-xl text-gray-400">({tokenData.symbol})</span>
                  {tokenData.isVerified && (
                    <Shield className="h-5 w-5 text-blue-400" />
                  )}
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(tokenData.riskScore)}`}>
                    {tokenData.riskScore.toUpperCase()} RISK
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>Launched {new Date(tokenData.launchedAt).toLocaleDateString()}</span>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={copyAddress}
                      className="flex items-center space-x-1 hover:text-white transition-colors"
                    >
                      <span>{tokenData.contractAddress.slice(0, 6)}...{tokenData.contractAddress.slice(-4)}</span>
                      <Copy className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-white">${tokenData.price.toFixed(6)}</div>
                <div className={`flex items-center space-x-1 ${
                  tokenData.change24h >= 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {tokenData.change24h >= 0 ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  <span className="font-semibold">
                    {tokenData.change24h >= 0 ? '+' : ''}{tokenData.change24h.toFixed(2)}%
                  </span>
                </div>
              </div>

              <div className="flex space-x-2">
                {tokenData.website && (
                  <a
                    href={tokenData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                  </a>
                )}
                {tokenData.twitter && (
                  <a
                    href={`https://twitter.com/${tokenData.twitter.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                )}
                {tokenData.telegram && (
                  <a
                    href={tokenData.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Chart and Trading */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-6">
                <button
                  onClick={() => setActiveTab('chart')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'chart'
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Chart
                </button>
                <button
                  onClick={() => setActiveTab('trade')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'trade'
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Trade
                </button>
              </div>

              {activeTab === 'chart' && (
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="time" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1F2937',
                          border: '1px solid #374151',
                          borderRadius: '8px',
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="price"
                        stroke="#8B5CF6"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              )}

              {activeTab === 'trade' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Buy */}
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-400 mb-4">Buy {tokenData.symbol}</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">You Pay (TON)</label>
                        <input
                          type="number"
                          placeholder="0.0"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">You Receive ({tokenData.symbol})</label>
                        <input
                          type="number"
                          placeholder="0.0"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white"
                          readOnly
                        />
                      </div>
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                        Buy {tokenData.symbol}
                      </button>
                    </div>
                  </div>

                  {/* Sell */}
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-red-400 mb-4">Sell {tokenData.symbol}</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">You Pay ({tokenData.symbol})</label>
                        <input
                          type="number"
                          placeholder="0.0"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">You Receive (TON)</label>
                        <input
                          type="number"
                          placeholder="0.0"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white"
                          readOnly
                        />
                      </div>
                      <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors">
                        Sell {tokenData.symbol}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">About {tokenData.name}</h2>
              <p className="text-gray-300 leading-relaxed">{tokenData.description}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Market Stats */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Market Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Market Cap:</span>
                  <span className="text-white font-semibold">{formatNumber(tokenData.marketCap)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">24h Volume:</span>
                  <span className="text-white font-semibold">{formatNumber(tokenData.volume24h)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Holders:</span>
                  <span className="text-white font-semibold">{tokenData.holders.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Max Supply:</span>
                  <span className="text-white font-semibold">{tokenData.maxSupply.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Circulating:</span>
                  <span className="text-white font-semibold">{tokenData.circulatingSupply.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Security Info */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Security & Audit</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Audit Score:</span>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-400 font-semibold">{tokenData.auditScore}/100</div>
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Liquidity Locked:</span>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-green-400">Yes</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Buy Tax:</span>
                  <span className="text-white">{tokenData.buyTax}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sell Tax:</span>
                  <span className="text-white">{tokenData.sellTax}%</span>
                </div>
                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center space-x-2">
                  <ExternalLink className="h-4 w-4" />
                  <span>View Contract</span>
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center space-x-2">
                  <Star className="h-4 w-4" />
                  <span>Add to Watchlist</span>
                </button>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center space-x-2">
                  <Twitter className="h-4 w-4" />
                  <span>Share on Twitter</span>
                </button>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center space-x-2">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Report Token</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenDetail;