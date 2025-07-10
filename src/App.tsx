import { QuickViewExample } from "@/components/QuickViewExample";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white p-4 shadow dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-center">Quick View Demo</h1>
      </header>
      <main className="container mx-auto p-4">
        <QuickViewExample />
      </main>
    </div>
  );
}