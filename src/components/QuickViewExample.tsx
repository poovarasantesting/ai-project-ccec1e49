import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuickViewPopup } from "@/components/ui/QuickViewPopup";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function QuickViewExample() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  return (
    <div className="p-6">
      <Button onClick={() => setIsPopupOpen(true)}>Quick View</Button>
      
      <QuickViewPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)}
      >
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Product Quick View</CardTitle>
            <CardDescription>View product details without leaving the page</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="aspect-square overflow-hidden rounded-md bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=500&auto=format&fit=crop" 
                  alt="Product" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Premium Product</h3>
                <p className="text-xl font-semibold text-primary">$199.99</p>
                <p className="text-gray-600 dark:text-gray-400">
                  This premium product features high-quality materials and exceptional craftsmanship.
                  Perfect for those who appreciate fine details and lasting quality.
                </p>
                <div className="space-y-2">
                  <p className="font-medium">Key Features:</p>
                  <ul className="list-inside list-disc text-gray-600 dark:text-gray-400">
                    <li>Premium materials</li>
                    <li>Expert craftsmanship</li>
                    <li>Long-lasting durability</li>
                    <li>Elegant design</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Add to Cart</Button>
            <Button>Buy Now</Button>
          </CardFooter>
        </Card>
      </QuickViewPopup>
    </div>
  );
}