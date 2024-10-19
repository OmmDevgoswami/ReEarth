import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function MarketplacePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
      <h2 className="text-3xl font-semibold mb-4">
        Transact with 500+ Buyers & Sellers of Recyclable Materials
      </h2>
      <p className="text-xl mb-8">
        10,000 MT transacted daily across 30+ States and UTs via RecycleMarketplace mobile app
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">PET bottle baled scrap - Clear</h3>
            <p className="mb-2">Location: Maharashtra</p>
            <p className="mb-2">Seller ID: S1010 (Frequently purchased)</p>
            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold">₹45.50/kg</p>
              <p>15000 MT available</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Buy</Button>
          </CardFooter>
        </Card>
        {/* Add more product cards here */}
      </div>
    </div>
  );
}