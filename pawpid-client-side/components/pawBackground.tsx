import React from 'react';
import Image from 'next/image';

interface PawBackgroundProps {
  children: React.ReactNode;
  className?: string;
  topRightPaw?: string;
  bottomLeftPaw?: string;
}

export default function PawBackground({ children, className = '', topRightPaw = '/assets/paw-top.png',  bottomLeftPaw = '/assets/paw-bottom.png'}: PawBackgroundProps) {
  return (
     <div className={`min-h-screen bg-[#FEFEFA] relative overflow-hidden ${className}`}>
      {/* Top Right Paw Image */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 opacity-50 pointer-events-none">
        <Image src={topRightPaw} alt="Background paw print" fill className="object-contain" priority />
      </div>

      {/* Bottom Left Paw Image */}
      <div className="absolute bottom-0 left-0 w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] opacity-50 pointer-events-none">
        <Image
          src={bottomLeftPaw}
          alt="Decorative paw print"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}