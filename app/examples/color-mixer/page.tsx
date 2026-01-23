"use client";

import Image from "next/image";
import { useState } from "react";
import {
  MotorControlScreen,
  MixingControlScreen,
} from "@/components/colourmate";

const screens = [
  { id: 1, src: "/screen-1.jpeg", alt: "COLOURMATE Screen 1" },
  { id: 2, src: "/screen-2.jpeg", alt: "COLOURMATE Screen 2" },
  { id: 3, src: "/screen-3.jpeg", alt: "COLOURMATE Screen 3" },
  { id: 4, src: "/screen-4.jpeg", alt: "COLOURMATE Screen 4" },
  { id: 5, src: "/screen-5.jpeg", alt: "COLOURMATE Screen 5" },
  { id: 6, src: "/screen-6.jpeg", alt: "COLOURMATE Screen 6" },
  { id: 7, src: "/screen-7.jpeg", alt: "COLOURMATE Screen 7" },
  { id: 8, src: "/screen-8.jpeg", alt: "COLOURMATE Screen 8" },
  { id: 9, src: "/screen-9.jpeg", alt: "COLOURMATE Screen 9" },
];

export default function ColorMixerPage() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [activeTab, setActiveTab] = useState<"motor" | "mixing">("motor");

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">COLOURMATE</h1>
          <p className="text-lg text-gray-600">
            Explore the features and functionality of the COLOURMATE application
            through these app screens
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
                Try out the actual app interface below. Switch between Motor and
                Mixing controls to explore the full functionality.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-6 border-b border-gray-200">
              <button
                onClick={() => setActiveTab("motor")}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === "motor"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Motor
              </button>
              <button
                onClick={() => setActiveTab("mixing")}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === "mixing"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Mixing
              </button>
            </div>

            {/* Demo Screen Container */}
            <div className="bg-gray-900 rounded-lg overflow-hidden max-w-4xl mx-auto">
              {activeTab === "motor" ? (
                <MotorControlScreen compact />
              ) : (
                <MixingControlScreen compact />
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            About COLOURMATE
          </h2>
          <p className="text-gray-600 mb-4">
            COLOURMATE is designed to provide an intuitive and interactive way
            to blend colors, visualize color combinations, and explore color
            theory. Navigate through the screens above to see the app&apos;s
            features and user interface.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Built with Custom Components:</strong> This application was
            developed using our custom-built React components, demonstrating our
            expertise in creating tailored solutions that meet specific design
            and functional requirements. We leverage React and other
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
