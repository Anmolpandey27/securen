import React from 'react';

const USPItem = ({ icon: Icon, title, description, color }) => {
  const iconClass = color === 'blue' ? 'text-blue-500' : color === 'red' ? 'text-red-500' : 'text-green-500';
  return (
    <div className="p-6 text-center bg-slate-800 rounded-xl shadow-lg border border-slate-700 transition duration-300 hover:border-green-500/50">
      <Icon className={`w-12 h-12 mx-auto mb-4 ${iconClass}`} />
      <h3 className="mb-2 text-2xl font-bold text-slate-50">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
};

export default USPItem;
