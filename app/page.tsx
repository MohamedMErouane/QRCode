"use client"


import React from 'react';
import QRCode from '../app/components/Qrcode';
import { useRouter } from 'next/navigation';

const Portfolio: React.FC = () => {
  const router = useRouter();
  const currentUrl = `medmerouane.netlify.app`; // Replace with your actual URL

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">My Portfolio</h1>
        <p className="text-gray-700 mb-6">This is my Portfolio content.</p>
        <div className="flex justify-center items-center" style={{ width: '256px', height: '256px' }}>
          <QRCode value={currentUrl} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
