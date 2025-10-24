import React, { useState } from 'react';
import { ChevronLeft, TrendingUp, Award, AlertCircle, Check, X, Minus, ChevronDown, ChevronUp } from 'lucide-react';

const ImprovedBonusTool = () => {
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'comparison'
  const [activeTab, setActiveTab] = useState('B'); // Which bonus rule tab is active
  const [openDrawer, setOpenDrawer] = useState(null); // Which component drawer is open
  const [showWhyExplanation, setShowWhyExplanation] = useState(false); // Show explanation in hero card
  const [showDetails, setShowDetails] = useState(false); // Toggle for detailed breakdown

  // Current month bonus data - Percentage-based
  const currentBonus = {
    status: 'ready',
    period: 'September 2025',
    paymentDate: 'October 31, 2025',
    isPending: true,
    selectedRule: 'B',
    monthlySalary: 3140,
    bonusA: {
      name: 'Bonus Rule A',
      totalPercent: 12.5,
      components: [
        {
          id: 'sales-a',
          name: 'Sales Performance',
          icon: '💰',
          weight: 40,
          achievementPercent: 82,
          earnedPercent: 6.6,
          maxPercent: 8,
          status: 'good',
          currentValue: 14200,
          unit: '€',
          milestones: [
            { value: 5000, label: 'Min', color: 'red' },
            { value: 10000, label: 'Target', color: 'green' },
            { value: 15000, label: 'Max', color: 'blue' }
          ]
        },
        {
          id: 'customer-a',
          name: 'Customer Satisfaction',
          icon: '⭐',
          weight: 30,
          achievementPercent: 90,
          earnedPercent: 5.4,
          maxPercent: 6,
          status: 'excellent',
          currentValue: 58,
          unit: 'surveys',
          milestones: [
            { value: 30, label: 'Min', color: 'yellow' },
            { value: 50, label: 'Target', color: 'green' },
            { value: 70, label: 'Excellence', color: 'purple' }
          ]
        },
        {
          id: 'attendance-a',
          name: 'Attendance',
          icon: '📅',
          weight: 15,
          achievementPercent: 91,
          earnedPercent: 1.4,
          maxPercent: 3,
          status: 'good',
          currentValue: 20,
          unit: 'days',
          milestones: [
            { value: 18, label: 'Min (18d)', color: 'yellow' },
            { value: 20, label: 'Target (20d)', color: 'blue' },
            { value: 21, label: 'Excellent (21d)', color: 'purple' }
          ]
        },
        {
          id: 'operational-a',
          name: 'Operational Excellence',
          icon: '🎯',
          weight: 15,
          achievementPercent: 60,
          earnedPercent: 1.8,
          maxPercent: 3,
          status: 'partial',
          currentValue: 2,
          unit: 'criteria',
          milestones: [
            { value: 1, label: '1', color: 'yellow' },
            { value: 2, label: '2', color: 'green' },
            { value: 3, label: '3', color: 'blue' },
            { value: 4, label: '4', color: 'purple' }
          ]
        }
      ]
    },
    bonusB: {
      name: 'Bonus Rule B',
      totalPercent: 15.2,
      components: [
        {
          id: 'sales-b',
          name: 'Sales Performance',
          icon: '💰',
          weight: 40,
          achievementPercent: 82,
          earnedPercent: 6.6,
          maxPercent: 8,
          status: 'good',
          currentValue: 14200,
          unit: '€',
          targetRange: '€5,000-€10,000',
          milestones: [
            { value: 5000, label: 'Min', percent: 25 },
            { value: 10000, label: 'Target', percent: 62.5 },
            { value: 15000, label: 'Max', percent: 93.75 }
          ]
        },
        {
          id: 'customer-b',
          name: 'Customer Satisfaction',
          icon: '⭐',
          weight: 30,
          achievementPercent: 90,
          earnedPercent: 5.4,
          maxPercent: 6,
          status: 'excellent',
          currentValue: 58,
          unit: 'surveys',
          targetRange: '50+ surveys collected',
          milestones: [
            { value: 30, label: '30', percent: 30 },
            { value: 50, label: '50', percent: 50 },
            { value: 70, label: '70', percent: 70 },
            { value: 100, label: '100', percent: 100 }
          ]
        },
        {
          id: 'attendance-b',
          name: 'Attendance',
          icon: '📅',
          weight: 15,
          achievementPercent: 91,
          earnedPercent: 1.4,
          maxPercent: 3,
          status: 'good',
          currentValue: 20,
          unit: 'days',
          targetRange: '18-21 days',
          milestones: [
            { value: 18, label: 'Min (18d)', percent: 70 },
            { value: 20, label: 'Target (20d)', percent: 85 },
            { value: 21, label: 'Excellent (21d)', percent: 95 }
          ]
        },
        {
          id: 'operational-b',
          name: 'Operational Excellence',
          icon: '🎯',
          weight: 15,
          achievementPercent: 50,
          earnedPercent: 1.8,
          maxPercent: 3,
          status: 'partial',
          currentValue: 2,
          unit: 'audit criteria',
          targetRange: 'Safety compliance',
          milestones: [
            { value: 1, label: '1', percent: 25 },
            { value: 2, label: '2', percent: 50 },
            { value: 3, label: '3', percent: 75 },
            { value: 4, label: '4', percent: 100 }
          ]
        }
      ]
    }
  };

  const historicalBonuses = [
    { id: 'aug-2025', period: 'August 2025', paidDate: 'September 30, 2025', selectedRule: 'A', finalPercent: 14.2 },
    { id: 'jul-2025', period: 'July 2025', paidDate: 'August 31, 2025', selectedRule: 'B', finalPercent: 11.5 },
    { id: 'jun-2025', period: 'June 2025', paidDate: 'July 31, 2025', selectedRule: 'B', finalPercent: 16.2 },
    { id: 'may-2025', period: 'May 2025', paidDate: 'June 30, 2025', selectedRule: 'A', finalPercent: 13.8 },
    { id: 'apr-2025', period: 'April 2025', paidDate: 'May 31, 2025', selectedRule: 'B', finalPercent: 12.4 },
    { id: 'mar-2025', period: 'March 2025', paidDate: 'April 30, 2025', selectedRule: 'A', finalPercent: 15.6 }
  ];

  const selectedBonusData = currentBonus.selectedRule === 'A' ? currentBonus.bonusA : currentBonus.bonusB;
  const alternativeBonusData = currentBonus.selectedRule === 'A' ? currentBonus.bonusB : currentBonus.bonusA;
  const activeBonusData = activeTab === 'A' ? currentBonus.bonusA : currentBonus.bonusB;

  // Home Page
  if (currentView === 'home') {
    return (
      <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">My Bonus</h1>

          {currentBonus.status === 'generating' ? (
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">We're generating your bonus</h3>
                  <p className="text-blue-800">
                    Your bonus is usually ready by the 20th of every month. Please check back soon.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* SIMPLE VIEW - Hero Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-4">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Your Bonus</h1>
                    <p className="text-sm text-gray-500 mt-1">{currentBonus.period}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl sm:text-4xl font-bold text-green-600">{selectedBonusData.totalPercent}%</div>
                    <div className="text-sm text-gray-500">
                      €{Math.round((selectedBonusData.totalPercent / 100) * currentBonus.monthlySalary)}
                    </div>
                  </div>
                </div>

                {/* Payment info */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 mb-4">
                  <div className="text-sm text-gray-700">
                    {currentBonus.isPending ? 'Payment on ' : 'Paid on '}
                    <span className="font-semibold">{currentBonus.paymentDate}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => {
                      setCurrentView('comparison');
                      setActiveTab(currentBonus.selectedRule);
                    }}
                    className="flex-1 bg-green-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <TrendingUp size={18} />
                    How was this calculated?
                  </button>
                  
                  <button
                    onClick={() => setShowWhyExplanation(!showWhyExplanation)}
                    className="flex-1 bg-gray-100 text-gray-700 px-5 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <AlertCircle size={18} />
                    Why {selectedBonusData.totalPercent}%?
                  </button>
                </div>

                {/* Expandable explanation */}
                {showWhyExplanation && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-700 text-sm mb-4">
                      We calculated your bonus using two models and selected <strong>Bonus {currentBonus.selectedRule}</strong> because it gave you <strong>{Math.abs(selectedBonusData.totalPercent - alternativeBonusData.totalPercent).toFixed(1)}%</strong> more.
                    </p>
                    <div className="flex gap-3">
                      <div className="flex-1 p-3 bg-gray-50 rounded-lg text-center">
                        <div className="text-gray-600 text-xs mb-1">Rule A</div>
                        <div className="font-bold text-gray-900 text-2xl">{currentBonus.bonusA.totalPercent}%</div>
                      </div>
                      <div className="flex-1 p-3 bg-gray-50 rounded-lg text-center">
                        <div className="text-gray-600 text-xs mb-1">Rule B</div>
                        <div className="font-bold text-gray-900 text-2xl">{currentBonus.bonusB.totalPercent}%</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Historical bonuses */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Previous Months</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Your bonuses from the last 6 months
                </p>
                <div className="space-y-3">
                  {historicalBonuses.map((bonus) => (
                    <div key={bonus.id} className="bg-white rounded-lg border border-gray-200 p-5 hover:border-gray-300 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gray-900">{bonus.period}</div>
                          <div className="text-sm text-gray-600 mt-1">
                            Paid on {bonus.paidDate} • Rule {bonus.selectedRule}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">{bonus.finalPercent}%</div>
                          <div className="text-sm text-gray-500">
                            €{Math.round((bonus.finalPercent / 100) * currentBonus.monthlySalary)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  // Comparison View
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => setCurrentView('home')}
          className="mb-4 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium"
        >
          <ChevronLeft size={20} />
          Back to overview
        </button>

        <h1 className="text-2xl font-bold text-gray-900 mb-6">Bonus Calculation</h1>

        {/* Rule Tabs */}
        <div className="bg-white rounded-lg shadow-sm p-2 mb-6 flex gap-2">
          <button
            onClick={() => setActiveTab('A')}
            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-colors ${
              activeTab === 'A'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            Bonus A: {currentBonus.bonusA.totalPercent}%
          </button>
          <button
            onClick={() => setActiveTab('B')}
            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-colors ${
              activeTab === 'B'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            Bonus B: {currentBonus.bonusB.totalPercent}%
          </button>
        </div>

        {/* Total Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-6 mb-6 text-white">
          <div className="text-center">
            <p className="text-blue-100 text-sm mb-2">Total Bonus</p>
            <div className="flex items-baseline justify-center gap-3 mb-2">
              <div className="text-5xl font-bold">{activeBonusData.totalPercent}%</div>
              <div className="text-3xl font-semibold text-blue-200">
                €{Math.round((activeBonusData.totalPercent / 100) * currentBonus.monthlySalary)}
              </div>
            </div>
            <p className="text-blue-100 text-sm">Payment on {currentBonus.paymentDate}</p>
          </div>
        </div>

        {/* Component Weights Overview */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Component Weights</h2>
          <div className="flex gap-1 mb-4 h-12 rounded-lg overflow-hidden">
            {activeBonusData.components.map((comp, idx) => (
              <div
                key={idx}
                style={{ width: `${comp.weight}%` }}
                className={`flex flex-col items-center justify-center text-white text-sm font-medium ${
                  idx === 0 ? 'bg-blue-500' :
                  idx === 1 ? 'bg-red-400' :
                  idx === 2 ? 'bg-yellow-500' :
                  'bg-green-500'
                }`}
              >
                <div className="text-lg">{comp.icon}</div>
                <div className="text-xs">{comp.weight}%</div>
              </div>
            ))}
          </div>
          
          {/* Labels */}
          <div className="flex flex-wrap gap-4 text-sm">
            {activeBonusData.components.map((comp, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded ${
                  idx === 0 ? 'bg-blue-500' :
                  idx === 1 ? 'bg-red-400' :
                  idx === 2 ? 'bg-yellow-500' :
                  'bg-green-500'
                }`}></div>
                <span className="text-gray-700">{comp.icon} {comp.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Performance Breakdown */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Performance Breakdown</h2>
          
          <div className="space-y-6">
            {activeBonusData.components.map((comp, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-colors"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{comp.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{comp.name}</h3>
                      <p className="text-sm text-gray-600">
                        Weight: {comp.weight}% • Current: {comp.currentValue} {comp.unit}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{comp.earnedPercent}%</div>
                    <div className="text-xs text-gray-500">of salary</div>
                    <span className={`inline-block mt-1 px-2 py-1 text-xs rounded-full ${
                      comp.status === 'excellent' ? 'bg-green-100 text-green-700' :
                      comp.status === 'good' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      ✓ {comp.status.charAt(0).toUpperCase() + comp.status.slice(1)}
                    </span>
                  </div>
                </div>

                {/* Calculation */}
                <div className="bg-gray-50 rounded p-3 mb-4 text-sm">
                  <div className="flex items-center justify-between text-gray-700">
                    <span>Calculation</span>
                    <span className="font-mono font-medium">
                      {comp.weight}% × {comp.achievementPercent}% × {comp.maxPercent}% = {comp.earnedPercent}%
                    </span>
                  </div>
                </div>

                {/* Progress Bar with Milestones */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{comp.targetRange || 'Progress'}</span>
                    <span className="font-medium text-gray-900">{comp.achievementPercent}%</span>
                  </div>
                  
                  <div className="relative pt-4">
                    {/* Milestone markers above bar */}
                    {comp.milestones && (
                      <div className="absolute top-0 left-0 right-0 flex justify-between px-1">
                        {comp.milestones.map((milestone, mIdx) => (
                          <div key={mIdx} className="flex flex-col items-center" style={{ position: 'absolute', left: `${milestone.percent || (milestone.value / comp.currentValue) * comp.achievementPercent}%` }}>
                            <div className={`w-3 h-3 rounded-full border-2 border-white shadow ${
                              comp.achievementPercent >= (milestone.percent || 0) ? 'bg-green-500' : 'bg-gray-300'
                            }`}></div>
                            <span className="text-xs text-gray-600 mt-1 whitespace-nowrap">{milestone.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Progress bar */}
                    <div className="h-8 bg-gray-100 rounded-lg overflow-hidden mt-6">
                      <div
                        style={{ width: `${comp.achievementPercent}%` }}
                        className={`h-full flex items-center justify-end pr-2 text-white text-xs font-medium ${
                          comp.achievementPercent >= 80 ? 'bg-green-500' :
                          comp.achievementPercent >= 50 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                      >
                        {comp.achievementPercent >= 20 && `${comp.achievementPercent}%`}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>Achievement: {comp.achievementPercent}% of {comp.maxPercent}% max</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary at Bottom */}
        <div className="mt-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-80 mb-1">Total Bonus Earned</div>
              <div className="text-3xl font-bold">{activeBonusData.totalPercent}%</div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-80 mb-1">Estimated Amount</div>
              <div className="text-3xl font-bold">
                €{Math.round((activeBonusData.totalPercent / 100) * currentBonus.monthlySalary)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovedBonusTool;