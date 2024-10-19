import React from 'react';
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <div className="flex-1 p-12 flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-4">A Marketplace In Your Pocket</h1>
        <p className="text-xl mb-8">
          End-to-end transparent transactions and door-step delivery at BEST PRICES for quality material
        </p>
        <Button className="w-40 bg-green-500 hover:bg-green-600 text-white">
          Wonder how? &gt;
        </Button>
      </div>
      <div className="flex-1 bg-gray-300">
        <img
          src="/placeholder.svg?height=600&width=600"
          alt="Person using smartphone"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}