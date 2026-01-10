import { useState, useEffect } from 'react';

interface BootMessage {
  text: string;
  progress: number;
}

const bootMessages: BootMessage[] = [
  { text: 'Loading kernel...', progress: 20 },
  { text: 'Initializing memory...', progress: 40 },
  { text: 'Loading ML modules...', progress: 60 },
  { text: 'Starting services...', progress: 80 },
  { text: 'Boot complete.', progress: 100 },
];

export function useBootSequence(skipBoot = false) {
  const [currentStep, setCurrentStep] = useState(skipBoot ? bootMessages.length : 0);
  const [isComplete, setIsComplete] = useState(skipBoot);

  useEffect(() => {
    if (skipBoot) {
      setIsComplete(true);
      return;
    }

    if (currentStep < bootMessages.length) {
      const delay = 300 + Math.random() * 200; // Slightly random delays for realism
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsComplete(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentStep, skipBoot]);

  return {
    currentStep,
    isComplete,
    messages: bootMessages,
    currentMessage: bootMessages[currentStep - 1],
  };
}
