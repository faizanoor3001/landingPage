'use client';

import { CheckIcon } from '@heroicons/react/24/solid';

interface Step {
  title: string;
  description: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = currentStep > index + 1;
          const isCurrent = currentStep === index + 1;

          return (
            <div key={step.title} className="flex items-center">
              <div className="relative flex items-center">
                <div
                  className={`
                    h-8 w-8 rounded-full border-2 flex items-center justify-center
                    ${isCompleted ? 'bg-green-500 border-green-500' : 
                      isCurrent ? 'border-green-500 bg-transparent' : 
                      'border-gray-600 bg-transparent'}
                  `}
                >
                  {isCompleted ? (
                    <CheckIcon className="h-5 w-5 text-white" />
                  ) : (
                    <span className={`text-sm ${isCurrent ? 'text-green-500' : 'text-gray-400'}`}>
                      {index + 1}
                    </span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`
                      h-0.5 w-24 ml-2
                      ${isCompleted ? 'bg-green-500' : 'bg-gray-600'}
                    `}
                  />
                )}
              </div>
              <div className="ml-4">
                <p className={`text-sm font-medium ${isCurrent ? 'text-green-500' : 'text-gray-400'}`}>
                  {step.title}
                </p>
                <p className="text-xs text-gray-500">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}; 