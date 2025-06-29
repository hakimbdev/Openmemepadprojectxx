import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, TrendingDown, Users, DollarSign, Shield, AlertTriangle, Star } from 'lucide-react';

interface TokenCardProps {
  token: {
    id: string;
    name: string;
    symbol: string;
    price: number;
    change24h: number;
    marketCap: number;
    volume24h: number;
    holders: number;
    image: string;
    isVerified: boolean;
    riskScore: 'low' | 'medium' | 'high';
    launchedAt: string;
  };
}

const TokenCard: React.FC<TokenCardProps> = ({ token }) => {
  const formatNumber = (num: number) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-400 bg-green-400/20 border-green-400/50';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/50';
      case 'high': return 'text-red-400 bg-red-400/20 border-red-400/50';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/50';
    }
  };

  const getRiskEmoji = (risk: string) => {
    switch (risk) {
      case 'low': return '✅';
      case 'medium': return '⚠️';
      case 'high': return '🚨';
      default: return '❓';
    }
  };

  return (
    <Link to={`/token/${token.id}`}>
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-4 sm:p-6 hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={token.image}
                alt={token.name}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white/30 shadow-lg group-hover:animate-bounce"
              />
              {token.isVerified && (
                <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-1 shadow-lg animate-pulse">
                  <Shield className="h-3 w-3 text-white" />
                </div>
              )}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-white font-black text-lg sm:text-xl group-hover:text-yellow-300 transition-colors">
                  {token.symbol}
                </h3>
                <Star className="h-4 w-4 text-yellow-400 group-hover:animate-spin" />
              </div>
              <p className="text-white/70 text-sm font-semibold">{token.name}</p>
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-black border-2 ${getRiskColor(token.riskScore)} group-hover:animate-pulse`}>
            {getRiskEmoji(token.riskScore)} {token.riskScore.toUpperCase()}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between bg-white/10 rounded-2xl p-3">
            <span className="text-white/80 font-semibold">Price:</span>
            <span className="text-white font-black text-lg">${token.price.toFixed(6)} 💎</span>
          </div>

          <div className="flex items-center justify-between bg-white/10 rounded-2xl p-3">
            <span className="text-white/80 font-semibold">24h Change:</span>
            <div className={`flex items-center space-x-1 font-black ${
              token.change24h >= 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              {token.change24h >= 0 ? (
                <TrendingUp className="h-4 w-4 animate-bounce" />
              ) : (
                <TrendingDown className="h-4 w-4 animate-bounce" />
              )}
              <span>
                {token.change24h >= 0 ? '+' : ''}{token.change24h.toFixed(2)}%
              </span>
              <span>{token.change24h >= 0 ? '🚀' : '📉'}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 rounded-2xl p-3">
              <div className="flex items-center space-x-1 text-white/70 text-xs mb-1 font-semibold">
                <DollarSign className="h-3 w-3" />
                <span>Market Cap</span>
              </div>
              <span className="text-white text-sm font-black">
                {formatNumber(token.marketCap)} 💰
              </span>
            </div>
            <div className="bg-white/10 rounded-2xl p-3">
              <div className="flex items-center space-x-1 text-white/70 text-xs mb-1 font-semibold">
                <Users className="h-3 w-3" />
                <span>Holders</span>
              </div>
              <span className="text-white text-sm font-black">
                {token.holders.toLocaleString()} 👥
              </span>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-3">
            <div className="text-white/70 text-xs mb-1 font-semibold">24h Volume</div>
            <div className="text-white font-black text-lg">{formatNumber(token.volume24h)} 📊</div>
          </div>
        </div>

        <div className="mt-4 text-xs text-white/60 font-semibold bg-white/5 rounded-xl p-2 text-center">
          🚀 Launched {new Date(token.launchedAt).toLocaleDateString()}
        </div>
      </div>
    </Link>
  );
};

export default TokenCard;