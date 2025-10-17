"use client";
import Image from "next/image";

const loadImage = "/chanakya.gif";

export default function Loader({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm">
      <div className="text-center space-y-6">
        {/* Animated Logo Container */}
        <div className="animate-float">
          <div className="w-32 h-32 bg-transparent rounded-2xl shadow-lg flex items-center justify-center mx-auto ">
            {/* Logo Image */}
            <Image
              src={loadImage}
              alt="Loading Logo"
              width={64}
              height={64}
              className="rounded-lg object-cover"
            />
            {/* <h1 className="text-secondary">ICEM</h1> */}
          </div>
        </div>

        {/* Pulsing dots */}
        <div className="flex justify-center space-x-2">
          <div
            className="w-2 h-2 bg-primary rounded-full animate-pulse"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-2 h-2 bg-primary rounded-full animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-primary rounded-full animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
