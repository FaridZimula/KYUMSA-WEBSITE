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
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#00703C] transition-opacity duration-500 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center">
        <div className="relative">
          <div className="animate-pulse">
            <Users className="h-32 w-32 text-white mx-auto mb-6 animate-bounce" style={{ animationDuration: '1.5s' }} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 animate-fade-in">
            KYUMSA
          </h1>
          <p className="text-lg md:text-xl text-white animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Kyambogo University Muslim Students Association
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoAnimation;
