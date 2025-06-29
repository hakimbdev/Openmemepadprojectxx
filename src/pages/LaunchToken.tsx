import React, { useState } from 'react';
import { 
  Rocket, 
  Upload, 
  Info, 
  Shield, 
  DollarSign,
  Users,
  Settings,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const LaunchToken: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    totalSupply: '',
    description: '',
    website: '',
    twitter: '',
    telegram: '',
    buyTax: '',
    sellTax: '',
    burnPercent: '',
    liquidityLock: '',
    presaleEnabled: false,
    presalePrice: '',
    presaleHardCap: '',
    presaleSoftCap: '',
  });

  const steps = [
    { id: 1, title: 'Basic Info', icon: Info },
    { id: 2, title: 'Tokenomics', icon: DollarSign },
    { id: 3, title: 'Social Links', icon: Users },
    { id: 4, title: 'Advanced', icon: Settings },
    { id: 5, title: 'Review & Deploy', icon: Rocket },
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleDeploy = () => {
    // Simulate deployment
    alert('Token deployment initiated! This would interact with TON smart contracts in a real implementation.');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Token Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="e.g., Doge Moon"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Token Symbol *
              </label>
              <input
                type="text"
                value={formData.symbol}
                onChange={(e) => handleInputChange('symbol', e.target.value.toUpperCase())}
                placeholder="e.g., DMOON"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Total Supply *
              </label>
              <input
                type="number"
                value={formData.totalSupply}
                onChange={(e) => handleInputChange('totalSupply', e.target.value)}
                placeholder="e.g., 1000000000"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Tell the community about your token..."
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 mb-2">Upload Token Image</p>
              <p className="text-sm text-gray-500">PNG, JPG or SVG (max 2MB)</p>
              <button className="mt-4 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
                Choose File
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Buy Tax (%)
                </label>
                <input
                  type="number"
                  value={formData.buyTax}
                  onChange={(e) => handleInputChange('buyTax', e.target.value)}
                  placeholder="e.g., 5"
                  max="25"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <p className="text-xs text-gray-500 mt-1">Max 25%</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Sell Tax (%)
                </label>
                <input
                  type="number"
                  value={formData.sellTax}
                  onChange={(e) => handleInputChange('sellTax', e.target.value)}
                  placeholder="e.g., 5"
                  max="25"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <p className="text-xs text-gray-500 mt-1">Max 25%</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Auto-Burn Percentage (%)
              </label>
              <input
                type="number"
                value={formData.burnPercent}
                onChange={(e) => handleInputChange('burnPercent', e.target.value)}
                placeholder="e.g., 2"
                max="10"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <p className="text-xs text-gray-500 mt-1">Percentage of each transaction to burn</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Liquidity Lock Period (days)
              </label>
              <select
                value={formData.liquidityLock}
                onChange={(e) => handleInputChange('liquidityLock', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select lock period</option>
                <option value="30">30 days</option>
                <option value="90">90 days</option>
                <option value="180">180 days</option>
                <option value="365">1 year</option>
                <option value="forever">Forever</option>
              </select>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <AlertCircle className="h-5 w-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Important</span>
              </div>
              <p className="text-yellow-200 text-sm">
                Higher taxes and shorter lock periods may be flagged as risky by our scanner. 
                Consider community-friendly settings for better reception.
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Website URL
              </label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                placeholder="https://yourproject.com"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Twitter/X Handle
              </label>
              <input
                type="text"
                value={formData.twitter}
                onChange={(e) => handleInputChange('twitter', e.target.value)}
                placeholder="@yourproject"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Telegram Channel
              </label>
              <input
                type="text"
                value={formData.telegram}
                onChange={(e) => handleInputChange('telegram', e.target.value)}
                placeholder="t.me/yourproject"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Info className="h-5 w-5 text-blue-400" />
                <span className="text-blue-400 font-semibold">Social Verification</span>
              </div>
              <p className="text-blue-200 text-sm">
                Adding social links helps build trust with your community and improves your token's 
                visibility on our platform.
              </p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-800 border border-gray-600 rounded-lg">
              <div>
                <h4 className="text-white font-semibold">Enable Presale</h4>
                <p className="text-gray-400 text-sm">Allow users to buy tokens before public launch</p>
              </div>
              <button
                onClick={() => handleInputChange('presaleEnabled', !formData.presaleEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  formData.presaleEnabled ? 'bg-primary-600' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    formData.presaleEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {formData.presaleEnabled && (
              <div className="space-y-4 p-4 bg-gray-800/50 border border-gray-600 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Presale Price (TON)
                    </label>
                    <input
                      type="number"
                      value={formData.presalePrice}
                      onChange={(e) => handleInputChange('presalePrice', e.target.value)}
                      placeholder="e.g., 0.001"
                      step="0.000001"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Hard Cap (TON)
                    </label>
                    <input
                      type="number"
                      value={formData.presaleHardCap}
                      onChange={(e) => handleInputChange('presaleHardCap', e.target.value)}
                      placeholder="e.g., 100"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Soft Cap (TON)
                  </label>
                  <input
                    type="number"
                    value={formData.presaleSoftCap}
                    onChange={(e) => handleInputChange('presaleSoftCap', e.target.value)}
                    placeholder="e.g., 50"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
            )}
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Token Summary</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Name:</span>
                    <span className="text-white">{formData.name || 'Not set'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Symbol:</span>
                    <span className="text-white">{formData.symbol || 'Not set'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Supply:</span>
                    <span className="text-white">{formData.totalSupply || 'Not set'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Buy Tax:</span>
                    <span className="text-white">{formData.buyTax || '0'}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sell Tax:</span>
                    <span className="text-white">{formData.sellTax || '0'}%</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Burn %:</span>
                    <span className="text-white">{formData.burnPercent || '0'}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Liquidity Lock:</span>
                    <span className="text-white">{formData.liquidityLock || 'Not set'} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Presale:</span>
                    <span className="text-white">{formData.presaleEnabled ? 'Enabled' : 'Disabled'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Website:</span>
                    <span className="text-white">{formData.website ? 'Set' : 'Not set'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Social Links:</span>
                    <span className="text-white">
                      {(formData.twitter || formData.telegram) ? 'Set' : 'Not set'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-green-400 font-semibold">Deployment Costs</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-green-200">
                  <span>Smart Contract Deployment:</span>
                  <span>~0.1 TON</span>
                </div>
                <div className="flex justify-between text-green-200">
                  <span>Initial Liquidity (recommended):</span>
                  <span>~10 TON</span>
                </div>
                <div className="flex justify-between text-green-200">
                  <span>Platform Fee:</span>
                  <span>0.05 TON</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Launch Your Token</h1>
          <p className="text-gray-400">Create and deploy your memecoin on the TON blockchain</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              
              return (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      isActive
                        ? 'bg-primary-600 border-primary-600 text-white'
                        : isCompleted
                        ? 'bg-green-600 border-green-600 text-white'
                        : 'bg-gray-800 border-gray-600 text-gray-400'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-full h-0.5 mx-4 ${
                        isCompleted ? 'bg-green-600' : 'bg-gray-600'
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex justify-between mt-2">
            {steps.map((step) => (
              <div key={step.id} className="text-xs text-gray-400 text-center">
                {step.title}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            {steps[currentStep - 1].title}
          </h2>
          
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:opacity-50 text-white rounded-lg transition-colors"
            >
              Previous
            </button>
            
            {currentStep < steps.length ? (
              <button
                onClick={nextStep}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleDeploy}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-lg transition-all flex items-center space-x-2"
              >
                <Rocket className="h-5 w-5" />
                <span>Deploy Token</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchToken;