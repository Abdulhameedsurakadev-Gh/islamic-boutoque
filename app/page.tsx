import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className = "min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className = "text-5xl font-extrabold text-emerald-700">Islamic Boutique</h1>
      <p className = "mt-4 text-xl text-gray-600">Coming soon: Elegant modest wear for the modern world</p>
      <button className = "mt-8 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">View Collection</button>

      <section>
        <Button>Click Me</Button>
      </section>
    </main>
  );
}