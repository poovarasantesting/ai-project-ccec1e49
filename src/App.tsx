import { Button } from "./components/ui/button";
import { Cart } from "./components/ui/cart/Cart";

export default function App() {
  return (
    <div className="min-h-screen p-4">
      <header className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">My Store</h1>
        <Cart />
      </header>
      <main className="container mx-auto py-8">
        <h2 className="text-xl font-semibold mb-4">Welcome to our store</h2>
        <p className="mb-4">Click the cart icon in the top right to view your cart.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Sample product cards would go here */}
          <div className="border rounded-lg p-4">
            <div className="h-48 bg-gray-100 rounded mb-4"></div>
            <h3 className="font-medium">Product 1</h3>
            <p className="text-muted-foreground">$19.99</p>
            <Button className="mt-4 w-full">Add to cart</Button>
          </div>
          <div className="border rounded-lg p-4">
            <div className="h-48 bg-gray-100 rounded mb-4"></div>
            <h3 className="font-medium">Product 2</h3>
            <p className="text-muted-foreground">$29.99</p>
            <Button className="mt-4 w-full">Add to cart</Button>
          </div>
          <div className="border rounded-lg p-4">
            <div className="h-48 bg-gray-100 rounded mb-4"></div>
            <h3 className="font-medium">Product 3</h3>
            <p className="text-muted-foreground">$39.99</p>
            <Button className="mt-4 w-full">Add to cart</Button>
          </div>
        </div>
      </main>
    </div>
  );
}