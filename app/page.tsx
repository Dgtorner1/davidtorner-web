export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold">David Törner</h1>
      <p className="mt-4 text-lg text-gray-300">
        AI-byggare. Jag designar och produktiserar LLM-drivna verktyg, agenter och UI.
      </p>
      <a
        href="/work"
        className="mt-8 px-5 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200"
      >
        Se projekt
      </a>
    </main>
  )
}
