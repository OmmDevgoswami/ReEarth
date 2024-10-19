import React from 'react';
import { Button } from "@/components/ui/button"

export default function ScrapCollectionPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-4">Got scrap?<br />Sell it to us.</h1>
            <p className="text-xl mb-8">
              Sell us your recyclable wastes and help contribute to the circular economy.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Download the app
              </Button>
              <Button variant="outline">
                For Business
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Scrap collection truck"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}