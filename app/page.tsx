'use client';

import { useState } from 'react';
import DomeGallery from '@/components/DomeGallery';
import InteractionFlow from '@/components/InteractionFlow';

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);

  const userImages = [
  '/20250820_201622_Imc_8.4.jpg',
  '/2nn.jpg',
  '/3nn.jpg',
  '/4nn.jpg',
  '/5nn.jpg',
  '/6nn.jpg',
  '/7nn.jpg',
  '/8nn.jpg',
  '/9nn.jpg',
  '/10nn.jpg',
  '/11nn.jpg',
  '/12nn.jpg',
  '/13nn.jpg',
  '/14nn.jpg',
  '/15nn.jpg',
];

  return (
    <main className="w-screen h-screen bg-[#060010]">
      {!showGallery ? (
        <InteractionFlow onFlowComplete={() => setShowGallery(true)} />
      ) : (
        <>
          <audio src="/pretty.mp3" autoPlay loop className="hidden" />
          <DomeGallery
            images={userImages}
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale={false}
            autoRotationSpeed={0.1}
          />
        </>
      )}
    </main>
  );
}
