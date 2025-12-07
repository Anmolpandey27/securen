import React from 'react';

const FeatureCard = ({ icon: Icon, title, description, colorClass = 'text-green-500' }) => (
  <div className="p-6 transition duration-500 transform bg-slate-800 rounded-xl shadow-2xl hover:shadow-green-500/30 hover:scale-[1.02] border border-slate-700">
    <Icon className={`w-10 h-10 mb-4 ${colorClass}`} />
    <h3 className="mb-2 text-xl font-bold text-slate-100">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </div>
);

export default FeatureCard;
