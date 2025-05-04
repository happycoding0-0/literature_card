// Modal.jsx
import React from 'react';

export default function Modal({ show, onClose, title, info }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative">
        {/* 닫기 버튼 (상단 우측 X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h3 className="text-2xl font-bold mb-2 text-gray-900 text-center">{title}</h3>
        <p className="text-center text-gray-700 mb-4">{info.author}</p>

        <div className="space-y-3 text-sm text-gray-800">
          <div>
            <span className="font-semibold text-gray-600">갈래:</span>
            <span className="ml-2">{info.genre}</span>
          </div>

          <div>
            <span className="font-semibold text-gray-600">성격:</span>
            <span className="ml-2">{info.personality}</span>
          </div>

          <div>
            <span className="font-semibold text-gray-600">제재:</span>
            <span className="ml-2">{info.sanctions}</span>
          </div>

          <div>
            <span className="font-semibold text-gray-600">주제:</span>
            <span className="ml-2">{info.theme}</span>
          </div>

          <div>
            <span className="font-semibold text-gray-600">특징:</span>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              {info.characteristics.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <span className="font-semibold text-gray-600">내용 요약:</span>
            <p className="mt-1 whitespace-pre-line leading-relaxed text-gray-800">{info.summary}</p>
          </div>
        </div>

        {/* 닫기 버튼 하단 */}
        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
