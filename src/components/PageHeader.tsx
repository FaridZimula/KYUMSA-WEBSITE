import React from 'react';

interface PageHeaderProps {
  title: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, backgroundImage }) => {
  return (
    <div className="relative h-64 overflow-hidden">
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00703C]/80 to-[#005A30]/80" />
      <div className="relative h-full flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
