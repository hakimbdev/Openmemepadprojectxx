import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Wallet, LogOut, Sparkles } from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import WalletModal from './WalletModal';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const { isConnected, address, balance, disconnectWallet } = useWallet();

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-gradient-to-r from-purple-600/90 via-pink-500/90 to-blue-500/90 backdrop-blur-xl border-b-4 border-white/20 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300 group-hover:rotate-12">
                  <Sparkles className="text-white font-bold text-lg sm:text-xl animate-pulse" />
                </div>
                <span className="text-white font-black text-lg sm:text-2xl bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
                  Open Memepad
                </span>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                <Link
                  to="/"
                  className="text-white/90 hover:text-white hover:bg-white/20 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  🏠 Home
                </Link>
                <Link
                  to="/launch"
                  className="text-white/90 hover:text-white hover:bg-white/20 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  🚀 Launch
                </Link>
                <Link
                  to="/trading"
                  className="text-white/90 hover:text-white hover:bg-white/20 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  💰 Trading
                </Link>
                <Link
                  to="/leaderboards"
                  className="text-white/90 hover:text-white hover:bg-white/20 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  🏆 Leaders
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              {isConnected ? (
                <div className="flex items-center space-x-2">
                  <div className="hidden sm:block text-right bg-white/10 rounded-2xl px-3 py-2 backdrop-blur-sm">
                    <div className="text-sm text-white font-bold">{formatAddress(address!)}</div>
                    <div className="text-xs text-yellow-300 font-semibold">{balance} TON 💎</div>
                  </div>
                  <button
                    onClick={disconnectWallet}
                    className="bg-red-500 hover:bg-red-600 text-white p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg"
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsWalletModalOpen(true)}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
                >
                  <Wallet className="h-4 w-4" />
                  <span className="hidden sm:inline">Connect</span>
                  <span className="sm:hidden">💳</span>
                </button>
              )}

              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white hover:text-yellow-300 hover:bg-white/20 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden animate-slide-down">
            <div className="px-4 pt-2 pb-4 space-y-2 bg-gradient-to-b from-purple-600/95 to-pink-600/95 backdrop-blur-xl border-t border-white/20">
              <Link
                to="/"
                className="text-white hover:bg-white/20 block px-4 py-3 rounded-2xl text-base font-bold transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                🏠 Home
              </Link>
              <Link
                to="/launch"
                className="text-white hover:bg-white/20 block px-4 py-3 rounded-2xl text-base font-bold transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                🚀 Launch Token
              </Link>
              <Link
                to="/trading"
                className="text-white hover:bg-white/20 block px-4 py-3 rounded-2xl text-base font-bold transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                💰 Trading
              </Link>
              <Link
                to="/leaderboards"
                className="text-white hover:bg-white/20 block px-4 py-3 rounded-2xl text-base font-bold transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                🏆 Leaderboards
              </Link>
              {isConnected && (
                <div className="bg-white/10 rounded-2xl p-4 mt-4">
                  <div className="text-white font-bold text-center">{formatAddress(address!)}</div>
                  <div className="text-yellow-300 font-semibold text-center">{balance} TON 💎</div>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      <WalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      />
    </>
  );
};

export default Navbar;