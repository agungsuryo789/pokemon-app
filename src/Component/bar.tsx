import React from 'react';

interface BarProps {
  progress: number; 
}

const Bar: React.FC<BarProps> = ({ progress }) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="relative bg-gray-200 p-1 rounded-full w-full">
      <div
        className="top-0 left-0 absolute bg-blue-600 rounded-full h-full"
        style={{ width: `${clampedProgress}%` }}
      ></div>
      <span className="absolute inset-0 flex justify-center items-center font-bold text-black text-sm">
        {clampedProgress}
      </span>
    </div>
  );
};

export default Bar;
