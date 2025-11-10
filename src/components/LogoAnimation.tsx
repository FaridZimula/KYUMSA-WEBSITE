import React, { useEffect, useState } from 'react';
import { Users } from 'lucide-react';

interface LogoAnimationProps {
  onComplete: () => void;
}

const LogoAnimation: React.FC<LogoAnimationProps> = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center">
        <div className="relative">
          <div className="animate-pulse mb-8">
            <img
              src="/kyumsa log_page-0001.png"
              alt="KYUMSA Logo"
              className="w-64 h-64 mx-auto object-contain"
            />
          </div>
          <p className="text-lg md:text-xl text-gray-700 animate-fade-in">
            Kyambogo University Muslim Students Association
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoAnimation;
