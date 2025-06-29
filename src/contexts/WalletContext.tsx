import React, { createContext, useContext, useState, useCallback } from 'react';

interface WalletContextType {
  isConnected: boolean;
  address: string | null;
  balance: string;
  connectWallet: (provider: 'tonkeeper' | 'tonhub') => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState('0.00');

  const connectWallet = useCallback(async (provider: 'tonkeeper' | 'tonhub') => {
    try {
      // Simulate wallet connection
      setTimeout(() => {
        setIsConnected(true);
        setAddress('UQBvI0aFLnw2QbZgjMPCLRdtRHxhUyinQudg6sdiohIwg5jL');
        setBalance('42.5');
      }, 1000);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  }, []);

  const disconnectWallet = useCallback(() => {
    setIsConnected(false);
    setAddress(null);
    setBalance('0.00');
  }, []);

  return (
    <WalletContext.Provider value={{
      isConnected,
      address,
      balance,
      connectWallet,
      disconnectWallet,
    }}>
      {children}
    </WalletContext.Provider>
  );
};