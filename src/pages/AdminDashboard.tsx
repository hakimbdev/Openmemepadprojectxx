import React, { useState } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Users, 
  DollarSign,
  Activity,
  TrendingUp,
  Search,
  Filter,
  Eye,
  Ban,
  Flag
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for admin dashboard
  const pendingTokens = [
    {
      id: '1',
      name: 'Super Doge',
      symbol: 'SDOGE',
      creator: 'DogeLover123',
      submitTime: '2024-01-26T10:30:00Z',
      riskFlags: ['High taxes', 'No liquidity lock'],
      contractAddress: 'EQBvI0aFLnw2QbZgjMPCLRdtRHxhUyinQudg6sdiohIwg5jL',
      image: 'https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      id: '2',
      name: 'Mega Cat',
      symbol: 'MCAT',
      creator: 'CatMaster',
      submitTime: '2024-01-26T09:15:00Z',
      riskFlags: ['Suspicious code'],
      contractAddress: 'EQCvI0aFLnw2QbZgjMPCLRdtRHxhUyinQudg6sdiohIwg5kM',
      image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
  ];

  const reportedTokens = [
    {
      id: '3',
      name: 'Scam Token',
      symbol: 'SCAM',
      creator: 'BadActor',
      reports: 15,
      reportReasons: ['Rug pull', 'Fake promises', 'Scam website'],
      image: 'https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
  ];

  const systemStats = [
    { label: 'Pending Reviews', value: '23', icon: Clock, color: 'text-yellow-400' },
    { label: 'Reported Tokens', value: '7', icon: AlertTriangle, color: 'text-red-400' },
    { label: 'Verified Today', value: '12', icon: CheckCircle, color: 'text-green-400' },
    { label: 'Active Moderators', value: '5', icon: Users, color: 'text-blue-400' },
  ];

  const handleApprove = (tokenId: string) => {
    console.log('Approving token:', tokenId);
    // In real app, this would make an API call
  };

  const handleReject = (tokenId: string) => {
    console.log('Rejecting token:', tokenId);
    // In real app, this would make an API call
  };

  const handleBan = (tokenId: string) => {
    console.log('Banning token:', tokenId);
    // In real app, this would make an API call
  };

  const tabs = [
    { id: 'pending', label: 'Pending Review', icon: Clock },
    { id: 'reported', label: 'Reported Tokens', icon: Flag },
    { id: 'analytics', label: 'Analytics', icon: Activity },
    { id: 'settings', label: 'Settings', icon: Shield },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-8">
          <Shield className="h-8 w-8 text-blue-400" />
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        {activeTab === 'pending' && (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search pending tokens..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <button className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white hover:bg-gray-700 transition-colors">
                <Filter className="h-5 w-5" />
              </button>
            </div>

            {pendingTokens.map((token) => (
              <div
                key={token.id}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={token.image}
                      alt={token.name}
                      className="w-16 h-16 rounded-full border-2 border-gray-600"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white">{token.name}</h3>
                      <p className="text-gray-400">{token.symbol}</p>
                      <p className="text-sm text-gray-500">By: {token.creator}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Submitted</p>
                    <p className="text-white">
                      {new Date(token.submitTime).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {token.riskFlags.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-red-400" />
                      <span className="text-red-400 font-semibold">Risk Flags</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {token.riskFlags.map((flag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-red-900/30 border border-red-500/30 text-red-400 rounded-full text-xs"
                        >
                          {flag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-1">Contract Address</p>
                  <p className="text-white font-mono text-sm">{token.contractAddress}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleApprove(token.id)}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  >
                    <CheckCircle className="h-4 w-4" />
                    <span>Approve</span>
                  </button>
                  <button
                    onClick={() => handleReject(token.id)}
                    className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                  >
                    <Ban className="h-4 w-4" />
                    <span>Reject</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    <Eye className="h-4 w-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'reported' && (
          <div className="space-y-6">
            {reportedTokens.map((token) => (
              <div
                key={token.id}
                className="bg-red-900/20 border border-red-500/30 rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={token.image}
                      alt={token.name}
                      className="w-16 h-16 rounded-full border-2 border-red-500"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white">{token.name}</h3>
                      <p className="text-gray-400">{token.symbol}</p>
                      <p className="text-sm text-gray-500">By: {token.creator}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Reports</p>
                    <p className="text-red-400 font-bold text-xl">{token.reports}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Flag className="h-4 w-4 text-red-400" />
                    <span className="text-red-400 font-semibold">Report Reasons</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {token.reportReasons.map((reason, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-red-900/30 border border-red-500/30 text-red-400 rounded-full text-xs"
                      >
                        {reason}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleBan(token.id)}
                    className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                  >
                    <Ban className="h-4 w-4" />
                    <span>Ban Token</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">
                    <Eye className="h-4 w-4" />
                    <span>Investigate</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    <CheckCircle className="h-4 w-4" />
                    <span>Dismiss Reports</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Platform Activity</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Tokens Launched Today:</span>
                  <span className="text-white font-semibold">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Trading Volume:</span>
                  <span className="text-green-400 font-semibold">$2.1M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Active Users:</span>
                  <span className="text-blue-400 font-semibold">5,432</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pending Reviews:</span>
                  <span className="text-yellow-400 font-semibold">23</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Security Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Scam Tokens Blocked:</span>
                  <span className="text-red-400 font-semibold">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">False Positive Rate:</span>
                  <span className="text-green-400 font-semibold">2.1%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Average Review Time:</span>
                  <span className="text-blue-400 font-semibold">4.2h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Community Reports:</span>
                  <span className="text-yellow-400 font-semibold">15</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Moderation Settings</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold">Auto-approve low risk tokens</h4>
                    <p className="text-gray-400 text-sm">Automatically approve tokens with audit score {'>'} 90</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-600">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold">Require manual review for high taxes</h4>
                    <p className="text-gray-400 text-sm">Flag tokens with buy/sell tax {'>'} 15% for manual review</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-600">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold">Community reporting</h4>
                    <p className="text-gray-400 text-sm">Allow users to report suspicious tokens</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-600">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Risk Thresholds</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Maximum Buy Tax (%)
                  </label>
                  <input
                    type="number"
                    defaultValue="25"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Maximum Sell Tax (%)
                  </label>
                  <input
                    type="number"
                    defaultValue="25"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Minimum Audit Score
                  </label>
                  <input
                    type="number"
                    defaultValue="70"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;