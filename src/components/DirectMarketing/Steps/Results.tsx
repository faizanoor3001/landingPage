'use client';

import { useRef } from 'react';
import { StepProps } from '../types';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const ResultsStep = ({ formState, onPrevious }: StepProps) => {
  const { installationData, marketData, costData, results } = formState;
  const reportRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    if (!reportRef.current) return;

    try {
      const canvas = await html2canvas(reportRef.current, {
        scale: 2,
        backgroundColor: '#1a1a1a',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('direct-marketing-calculation.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-white mb-4">Calculation Results</h3>
        <p className="text-sm text-gray-400 mb-6">
          Here's a summary of your direct marketing calculation.
        </p>
      </div>

      <div ref={reportRef} className="space-y-8">
        <div className="bg-gray-800/50 rounded-lg p-6">
          <h4 className="text-lg font-medium text-white mb-4">Installation Details</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-300">Installation Type</p>
              <p className="text-lg font-semibold text-white capitalize">
                {installationData.type === 'pv' ? 'Solar' : 
                 installationData.type === 'wind' ? 'Wind' : 
                 installationData.type === 'kwk' ? 'CHP' : installationData.type}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-300">Marketing Form</p>
              <p className="text-lg font-semibold text-white">
                {installationData.marketingForm === 'DirectMarketingWithFunding' ? 'With EEG Funding' :
                 installationData.marketingForm === 'DirectMarketingWithoutFunding' ? 'Without EEG Funding' :
                 'Post-EEG'}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-300">Nominal Power</p>
              <p className="text-lg font-semibold text-white">
                {installationData.nominalPower} kWp
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-300">Annual Production</p>
              <p className="text-lg font-semibold text-white">
                {installationData.annualProduction} kWh
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6">
          <h4 className="text-lg font-medium text-white mb-4">Market Data</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-300">Market Value</p>
              <p className="text-lg font-semibold text-white">
                {marketData.marketValue} €/MWh
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-300">Market Premium</p>
              <p className="text-lg font-semibold text-white">
                {marketData.marketPremium} €/MWh
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-300">Direct Marketing Fee</p>
              <p className="text-lg font-semibold text-white">
                {marketData.directMarketingFee} €/MWh
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-300">Self-Consumption Savings</p>
              <p className="text-lg font-semibold text-white">
                {marketData.selfConsumptionSavings} €/MWh
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6">
          <h4 className="text-lg font-medium text-white mb-4">Annual Costs</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-300">Maintenance Costs</p>
              <p className="text-lg font-semibold text-white">
                {costData.maintenanceCosts.toFixed(2)} €
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-300">Insurance Costs</p>
              <p className="text-lg font-semibold text-white">
                {costData.insuranceCosts.toFixed(2)} €
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-300">Other Costs</p>
              <p className="text-lg font-semibold text-white">
                {costData.otherCosts.toFixed(2)} €
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-300">Total Costs</p>
              <p className="text-lg font-semibold text-white">
                {results.totalCosts.toFixed(2)} €
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6">
          <h4 className="text-lg font-medium text-white mb-4">Financial Summary</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-300">Total Annual Revenue</p>
              <p className="text-lg font-semibold text-white">
                {results.totalRevenue.toFixed(2)} €
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-300">Total Annual Costs</p>
              <p className="text-lg font-semibold text-white">
                {results.totalCosts.toFixed(2)} €
              </p>
            </div>
            <div className="h-px bg-gray-700 my-2" />
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-300">Estimated Annual Profit</p>
              <p className="text-2xl font-semibold text-green-500">
                {results.profit.toFixed(2)} €
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={onPrevious}
          className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Back
        </button>
        <button
          type="button"
          onClick={generatePDF}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Download PDF Report
        </button>
      </div>
    </div>
  );
}; 