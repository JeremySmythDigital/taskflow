import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TF</span>
            </div>
            <span className="font-bold text-xl">TaskFlow</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Log in
            </Link>
            <Link 
              href="/signup" 
              className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition"
            >
              Start free
            </Link>
          </div>
        </nav>
      </header>

        { /* Hero, problem, how it works, pricing, CTA, footer - compacted for brevity */ }
        <section className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your tasks, <span className="text-sky-50">finally organized</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Dead simple task management for micro-businesses. 
            Stop losing track of what your team needs to do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="bg-sky-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-sky-600 transition shadow-lg shadow-sky-500/25"
            >
              Start free &#38212&ndash; no credit card
            </Link>
          </div>
        </section>
    </main>
  )
}