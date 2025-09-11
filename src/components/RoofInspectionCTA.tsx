import Link from 'next/link';
import React from 'react';
import { Phone, Calculator, Clock, CheckCircle } from 'lucide-react';

interface CTAProps {
  variant?: 'default' | 'urgent' | 'maintenance';
  urgency?: 'low' | 'medium' | 'high' | 'urgent';
  remainingYears?: number;
  className?: string;
}

export default function RoofInspectionCTA({ 
  variant = 'default', 
  urgency = 'medium',
  remainingYears,
  className = ''
}: CTAProps) {
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'urgent':
        return 'bg-gradient-to-r from-red-600 to-red-700 text-white border-red-500';
      case 'maintenance':
        return 'bg-gradient-to-r from-amber-500 to-amber-600 text-blue-900 border-amber-400';
      default:
        return 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-500';
    }
  };

  const getUrgencyMessage = () => {
    switch (urgency) {
      case 'urgent':
        return {
          title: 'Immediate Roof Replacement Needed',
          subtitle: 'Your roof has exceeded its expected lifespan',
          icon: <Clock className="w-6 h-6 text-red-200" />
        };
      case 'high':
        return {
          title: 'Roof Inspection Recommended Soon',
          subtitle: remainingYears ? `Only ${remainingYears} years remaining` : 'Nearing end of lifespan',
          icon: <Calculator className="w-6 h-6 text-amber-200" />
        };
      case 'medium':
        return {
          title: 'Schedule Your Roof Inspection',
          subtitle: 'Stay ahead of potential issues',
          icon: <CheckCircle className="w-6 h-6 text-blue-200" />
        };
      default:
        return {
          title: 'Professional Roof Assessment',
          subtitle: 'Get an accurate lifespan estimate',
          icon: <CheckCircle className="w-6 h-6 text-blue-200" />
        };
    }
  };

  const message = getUrgencyMessage();

  return (
    <div className={`rounded-2xl p-6 ${getVariantStyles()} ${className}`}>
      <div className="flex items-start mb-4">
        {message.icon}
        <div className="ml-3">
          <h3 className="text-xl font-bold mb-1">{message.title}</h3>
          <p className={`${variant === 'maintenance' ? 'text-blue-800' : variant === 'urgent' ? 'text-red-100' : 'text-blue-100'}`}>
            {message.subtitle}
          </p>
        </div>
      </div>

      {urgency === 'urgent' && (
        <div className="mb-4 p-3 bg-red-800 bg-opacity-50 rounded-lg border border-red-400">
          <p className="text-sm text-red-100">
            <strong>Priority Action:</strong> Schedule a roof replacement consultation immediately to prevent potential water damage and structural issues.
          </p>
        </div>
      )}

      {urgency === 'high' && remainingYears && remainingYears <= 5 && (
        <div className="mb-4 p-3 bg-amber-900 bg-opacity-30 rounded-lg border border-amber-400">
          <p className="text-sm text-amber-100">
            <strong>Planning Tip:</strong> Start budgeting for roof replacement now. Getting quotes early helps you compare options and plan timing.
          </p>
        </div>
      )}

      <div className="space-y-3">
        <Link
          href="/estimate"
          className={`block w-full text-center font-semibold py-3 px-4 rounded-lg transition-colors duration-200 ${
            variant === 'urgent' 
              ? 'bg-white text-red-600 hover:bg-gray-100'
              : variant === 'maintenance'
              ? 'bg-white text-amber-600 hover:bg-gray-100'
              : 'bg-amber-500 hover:bg-amber-600 text-blue-900'
          }`}
        >
          {urgency === 'urgent' ? 'Get Emergency Estimate' : 'Get Free Roof Estimate'}
        </Link>
        
        <a
          href="tel:2157997663"
          className={`block w-full text-center font-semibold py-3 px-4 rounded-lg transition-colors duration-200 border ${
            variant === 'urgent'
              ? 'border-red-400 hover:bg-red-600 text-white'
              : variant === 'maintenance'
              ? 'border-amber-400 hover:bg-amber-600 text-blue-900'
              : 'border-blue-400 hover:bg-blue-600 text-white'
          }`}
        >
          <Phone className="w-4 h-4 inline mr-2" />
          Call (215) 799-7663
        </a>
      </div>

      <div className="mt-4 text-center">
        <p className={`text-xs ${
          variant === 'maintenance' ? 'text-blue-700' : variant === 'urgent' ? 'text-red-200' : 'text-blue-200'
        }`}>
          Licensed & Insured • Free Inspections • 25+ Years Experience
        </p>
      </div>
    </div>
  );
}