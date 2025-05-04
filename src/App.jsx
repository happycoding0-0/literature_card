import React from 'react';
import TimelineContainer from "./components/TimelineContainer";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

export default function App() {
  return (
    <div className="App bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 min-h-screen p-4">
      <div className="bg-white/50 flex justify-between items-center p-4 rounded-lg mb-6">
        <h1 className="text-3xl font-bold text-gray-950">문학</h1>
        <p className="text-lg text-gray-700">인소과 2-1 이지우</p>
      </div>
      <TimelineContainer />
    </div>
  );
}
