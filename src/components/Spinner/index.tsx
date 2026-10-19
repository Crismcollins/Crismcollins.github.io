import React from 'react';
import { SpinnerProps } from './types';

const Spinner = ({
  visible = true,
  size = '16',
  inline = false,
  className,
}: SpinnerProps) => {
  if (!visible) return null;

  const spinner = (
    <div
      className={`w-${size} h-${size} border-4 rounded-full animate-spin border-gray-300 border-t-[var(--highlighted)] ${className ?? ''}`}
    />
  );

  if (inline) {
    return spinner;
  }

  return (
    <div className={`flex justify-center items-center inset-0 h-full w-full bg-black z-50`}>
      {spinner}
    </div>
  );
};

export default Spinner;
