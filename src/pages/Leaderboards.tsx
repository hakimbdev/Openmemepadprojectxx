import React, { useState } from 'react';
import { 
  Trophy, 
  TrendingUp, 
  TrendingDown, 
  Crown, 
  Medal,
  Award,
  Users,
  DollarSign,
  Calendar,
  Filter
} from 'lucide-react';

const Leaderboards: React.FC = () => {
  const [activeLeaderboard, setActiveLeaderboard] = useState('gainers');
  const [timeframe, setTimeframe] = useState('24h');

  const leaderboards = {
    gainers: [
      { rank: 1, name: 'Diamond Hands', symbol: 'DIAMOND', change: 234.56, volume: 3400000, image: 'https://images.pexels.com/photos/1340984/pexels-photo-1340984.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { rank: 2, name: 'Shiba Moon', symbol: 'SHIMOON', change: 123.45, volume: 2300000, image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { rank: 3, name: 'Cat Coin', symbol: 'MEOWTO', change: 78.90, volume: 890000, image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { rank: 4, name: 'Doge Moon', symbol: 'DMOON', change: 45.67, volume: 567000, image: 'https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { rank: 5, name: 'Rocket Fuel', symbol: 'ROCKET', change: 32.10, volume: 445000, image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=100' },
    ],
    volume: [
      { rank: 1, name: 'Diamond Hands', symbol: 'DIAMOND', volume: 3400000, holders: 4500, image: 'https://images.pexels.com/photos/1340984/pexels-photo-1340984.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { rank: 2, name: 'Shiba Moon', symbol: 'SHIMOON', volume: 2300000, holders: 5670, image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { rank: 3, name: 'Pepe Rocket', symbol: 'PROCKET', volume: 1200000, holders: 3400, image: 'https://images.pexels.com/photos/8919533/pexels-photo-8919533.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { rank: 4, name: 'Cat Coin', symbol: 'MEOWTO', volume: 890000, holders: 2100, image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { rank: 5, name: 'Doge Moon', symbol: 'DMOON', volume: 567000, holders: 1250, image: 'https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=100' },
    ],
    newest: [
      { rank: 1, name: 'Frog Token', symbol: 'FROGGY', launchedAt: '2024-01-25', marketCap: 1200000, image: 'https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { rank: 2, name: 'Cat Coin', symbol: 'MEOWTO', launchedAt: '2024-01-22', marketCap: 5400000, image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { rank: 3, name: 'Pepe Rocket', symbol: 'PROCKET', launchedAt: '2024-01-20', marketCap: 8900000, image: 'https://images.pexels.com/photos/8919533/pexels-photo-8919533.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { rank: 4, name: 'Shiba Moon', symbol: 'SHIMOON', launchedAt: '2024-01-18', marketCap: 15600000, image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { rank: 5, name: 'Doge Moon', symbol: 'DMOON', launchedAt: '2024-01-15', marketCap: 2300000, image: 'https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=100' },
    ],
    creators: [
      { rank: 1, name: 'MemeKing', tokens: 12, totalVolume: 45600000, successRate: 83, avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { rank: 2, name: 'TokenMaster', tokens: 8, totalVolume: 32100000, successRate: 75, avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { rank: 3, name: 'CryptoWizard', tokens: 15, totalVolume: 28900000, successRate: 67, avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { rank: 4, name: 'MoonLauncher', tokens: 6, totalVolume: 19800000, successRate: 90, avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { rank: 5, name: 'TokenCreator', tokens: 10, totalVolume: 16700000, successRate: 70, avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100' },
    ],
  };

  const formatNumber = (num: number) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-400" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-300" />;
      case 3:
        return <Award className="h-6 w-6 text-orange-400" />;
      default:
        return <span className="text-lg font-bold text-gray-400">#{rank}</span>;
    }
  };

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 border-yellow-400/30';
      case 2:
        return 'bg-gradient-to-r from-gray-400/20 to-gray-300/20 border-gray-400/30';
      case 3:
        return 'bg-gradient-to-r from-orange-500/20 to-orange-400/20 border-orange-400/30';
      default:
        return 'bg-gray-800/50 border-gray-700';
    }
  };

  const leaderboardTabs = [
    { id: 'gainers', label: 'Top Gainers', icon: TrendingUp },
    { id: 'volume', label: 'Top Volume', icon: DollarSign },
    { id: 'newest', label: 'Newest', icon: Calendar },
    { id: 'creators', label: 'Top Creators', icon: Users },
  ];

  const currentData = leaderboards[activeLeaderboard as keyof typeof leaderboards];

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Trophy className="h-8 w-8 text-yellow-400" />
            <h1 className="text-3xl font-bold text-white">Leaderboards</h1>
          </div>
          <p className="text-gray-400 text-lg">Discover the top performing tokens and creators</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {leaderboardTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveLeaderboard(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors ${
                  activeLeaderboard === tab.id
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

        {/* Timeframe Filter */}
        {(activeLeaderboard === 'gainers' || activeLeaderboard === 'volume') && (
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-800 rounded-lg p-1">
              {['24h', '7d', '30d'].map((period) => (
                <button
                  key={period}
                  onClick={() => setTimeframe(period)}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    timeframe === period
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Leaderboard Content */}
        <div className="space-y-4">
          {currentData.map((item, index) => (
            <div
              key={index}
              className={`backdrop-blur-sm border rounded-xl p-6 ${getRankBg(item.rank)}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12">
                    {getRankIcon(item.rank)}
                  </div>
                  
                  <img
                    src={activeLeaderboard === 'creators' ? (item as any).avatar : (item as any).image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full border-2 border-gray-600"
                  />
                  
                  <div>
                    <h3 className="text-white font-bold text-lg">{item.name}</h3>
                    {activeLeaderboard !== 'creators' && (
                      <p className="text-gray-400">${(item as any).symbol}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-8">
                  {/* Gainers */}
                  {activeLeaderboard === 'gainers' && (
                    <>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">24h Change</div>
                        <div className="text-green-400 font-bold text-xl flex items-center">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          +{(item as any).change.toFixed(2)}%
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Volume</div>
                        <div className="text-white font-semibold">
                          {formatNumber((item as any).volume)}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Volume */}
                  {activeLeaderboard === 'volume' && (
                    <>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">24h Volume</div>
                        <div className="text-white font-bold text-xl">
                          {formatNumber((item as any).volume)}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Holders</div>
                        <div className="text-blue-400 font-semibold">
                          {(item as any).holders.toLocaleString()}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Newest */}
                  {activeLeaderboard === 'newest' && (
                    <>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Launched</div>
                        <div className="text-white font-semibold">
                          {new Date((item as any).launchedAt).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Market Cap</div>
                        <div className="text-green-400 font-bold">
                          {formatNumber((item as any).marketCap)}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Creators */}
                  {activeLeaderboard === 'creators' && (
                    <>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Tokens Created</div>
                        <div className="text-white font-bold text-xl">
                          {(item as any).tokens}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Total Volume</div>
                        <div className="text-blue-400 font-semibold">
                          {formatNumber((item as any).totalVolume)}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Success Rate</div>
                        <div className="text-green-400 font-bold">
                          {(item as any).successRate}%
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 border border-yellow-400/30 rounded-xl p-6 text-center">
            <Crown className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Hall of Fame</h3>
            <p className="text-yellow-200">Top performers of all time</p>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-blue-400/20 border border-blue-400/30 rounded-xl p-6 text-center">
            <TrendingUp className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Rising Stars</h3>
            <p className="text-blue-200">Tokens with momentum</p>
          </div>

          <div className="bg-gradient-to-r from-purple-500/20 to-purple-400/20 border border-purple-400/30 rounded-xl p-6 text-center">
            <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Community Choice</h3>
            <p className="text-purple-200">Most loved by the community</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboards;