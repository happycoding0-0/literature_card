
import React from 'react';

export default function Card({ title, info }) {
  return (
    <div className="relative z-10 transition-transform duration-300 hover:scale-110 hover:z-50 w-80 h-96 bg-white rounded-xl p-6 shadow-lg cursor-pointer">
      <h2 className="text-2xl font-bold mb-2 text-black">{title}</h2>
      <p className="text-black font-medium mb-2">{info.author}</p>
      <div className='text-black overflow-auto h-48 text-left'>
        {info.summary}
      </div>
    </div>
  );
}
