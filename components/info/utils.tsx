import React from "react";

interface CardProps {
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 w-full md:w-1/2 lg:w-1/3 border border-orange-400 rounded-lg mb-4">
      <h2 className="text-xl font-semibold mb-4 text-black">{title}</h2>
      <p className="text-black">{description}</p>
    </div>
  );
};
