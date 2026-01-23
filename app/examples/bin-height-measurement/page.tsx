"use client";

import Image from "next/image";
import { useState } from "react";
import IndustrialBinHopper from "@/lib/component-examples/custom-widgets/industrial-bin-hopper";

const screens = [
  { id: 1, src: "/bin-1.jpg", alt: "Bin Height Measurement Screen 1" },
  { id: 2, src: "/bin-2.jpg", alt: "Bin Height Measurement Screen 2" },
  { id: 3, src: "/bin-3.jpg", alt: "Bin Height Measurement Screen 3" },
];

export default function BinHeightMeasurementPage() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [fillLevel, setFillLevel] = useState(65);
  const [capacity, setCapacity] = useState(500);
  const [material, setMaterial] = useState("Ore");

  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % screens.length);
  };

  const prevScreen = () => {
    setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };

  const goToScreen = (index: number) => {
    setCurrentScreen(index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bin Height Measurement
          </h1>
          <p className="text-lg text-gray-600">
            Explore the features and functionality of the Bin Height Measurement
            application through these app screens
          </p>
        </div>

        {/* Main Image Viewer */}
        <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 mb-6">
          <div className="relative">
            {/* Image Container */}
            <div className="relative aspect-video max-w-4xl mx-auto bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={screens[currentScreen].src}
                alt={screens[currentScreen].alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
                className="object-contain"
                priority
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevScreen}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Previous screen"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            <button
              onClick={nextScreen}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Next screen"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          {/* Screen Counter */}
          <div className="text-center mt-6">
            <span className="text-gray-600 font-medium">
              Screen {currentScreen + 1} of {screens.length}
            </span>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mb-8">
          <div className="flex justify-center gap-2 flex-wrap">
            {screens.map((screen, index) => (
              <button
                key={screen.id}
                onClick={() => goToScreen(index)}
                className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                  index === currentScreen
                    ? "border-blue-500 shadow-lg"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                aria-label={`Go to screen ${index + 1}`}
              >
                <Image
                  src={screen.src}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-200">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                Interactive Demo
              </h2>
              <p className="text-gray-600 text-center">
                Try out the Industrial Bin Hopper component below. Adjust the
                fill level, capacity, and material type to see how it responds.
              </p>
            </div>

            {/* Controls */}
            <div className="max-w-2xl mx-auto mb-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Capacity: {capacity} tons
                </label>
                <input
                  type="range"
                  min="100"
                  max="1000"
                  step="50"
                  value={capacity}
                  onChange={(e) => setCapacity(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Material Type
                </label>
                <select
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                >
                  <option value="Ore">Ore</option>
                  <option value="Coal">Coal</option>
                  <option value="Iron">Iron</option>
                  <option value="Copper">Copper</option>
                  <option value="Gold Ore">Gold Ore</option>
                </select>
              </div>
            </div>

            {/* Demo Component */}
            <div className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto">
              <div className="flex justify-center">
                <IndustrialBinHopper
                  fillLevel={fillLevel}
                  capacity={capacity}
                  material={material}
                  width={300}
                  height={400}
                  interactive={true}
                  onFillLevelChange={setFillLevel}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            About Bin Height Measurement
          </h2>
          <p className="text-gray-600 mb-4">
            The Bin Height Measurement application is designed to provide
            accurate monitoring and measurement of bin fill levels in mining
            operations. Navigate through the screens above to see the app&apos;s
            features and user interface.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Built with Custom Components:</strong> This application was
            developed using our custom-built React components, demonstrating our
            expertise in creating specialized industrial solutions that meet
            specific operational requirements. We leverage React and other
            industry-standard libraries to build robust, performant
            applications.
          </p>
          <p className="text-gray-600">
            These example pages serve as showcases of our component development
            capabilities. We can build any styled components as per your
            specific needs upon request, ensuring your application has a unique
            look and feel while maintaining high code quality and performance
            standards.
          </p>
        </div>
      </div>
    </div>
  );
}
