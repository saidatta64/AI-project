import React from 'react';

export const CustomCard = ({ children }) => {
  return (
    <div className="bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      {children}
    </div>
  );
};
