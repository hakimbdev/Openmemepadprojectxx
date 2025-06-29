import React from 'react';
import { X, Wallet, Sparkles } from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  const { connectWallet } = useWallet();

  if (!isOpen) return null;

  const handleConnect = async (provider: 'tonkeeper' | 'tonhub') => {
    await connectWallet(provider);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-purple-600/90 to-pink-600/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 w-full max-w-md mx-4 border-4 border-white/20 shadow-2xl animate-bounce-in">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Sparkles className="h-8 w-8 text-yellow-300 animate-pulse" />
            <h3 className="text-2xl font-black text-white">Connect Wallet 💳</h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-90"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleConnect('tonkeeper')}
            className="w-full flex items-center space-x-4 p-4 sm:p-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:animate-bounce">
              <Wallet className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
            </div>
            <div className="text-left flex-1">
              <div className="text-white font-black text-lg sm:text-xl">Tonkeeper 🔵</div>
              <div className="text-blue-100 text-sm font-semibold">Connect with Tonkeeper wallet</div>
            </div>
            <div className="text-2xl group-hover:animate-spin">🚀</div>
          </button>

          <button
            onClick={() => handleConnect('tonhub')}
            className="w-full flex items-center space-x-4 p-4 sm:p-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:animate-bounce">
              <Wallet className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
            </div>
            <div className="text-left flex-1">
              <div className="text-white font-black text-lg sm:text-xl">Tonhub 🟣</div>
              <div className="text-purple-100 text-sm font-semibold">Connect with Tonhub wallet</div>
            </div>
            <div className="text-2xl group-hover:animate-spin">💜</div>
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-white/80 font-semibold bg-white/10 rounded-2xl p-4">
          🔒 By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
        </div>
      </div>
    </div>
  );
};

export default WalletModal;