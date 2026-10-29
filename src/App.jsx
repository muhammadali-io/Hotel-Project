export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 px-4 text-white antialiased">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-800/50 p-8 shadow-2xl backdrop-blur-xl">
        {/* Success Indicator */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
          <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-7 w-7 animate-bounce">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        {/* Header Text */}
        <h1 className="bg-linear-to-r from-teal-400 to-emerald-400 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
          Tailwind is Active!
        </h1>
        
        <p className="mt-2 text-sm text-slate-400">
          If you see a dark layout, a green bouncing checkmark, and a gradient heading, your installation was successful.
        </p>

        {/* Feature Tests Layout */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between rounded-lg bg-slate-800 p-3 text-xs font-medium text-slate-300">
            <span>Flexbox & Transitions</span>
            <span className="rounded bg-teal-500/20 px-2 py-0.5 text-teal-400">Working</span>
          </div>
          
          <div className="flex items-center justify-between rounded-lg bg-slate-800 p-3 text-xs font-medium text-slate-300">
            <span>Gradient Text & Shadows</span>
            <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-emerald-400">Working</span>
          </div>
        </div>

        <div></div>

        {/* Interactive Button */}
        <button className="mt-8 w-full transform rounded-xl bg-linear-to-r from-teal-500 to-emerald-500 py-3 text-center text-sm font-semibold tracking-wide text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/20 active:translate-y-0">
          Hover & Click Me
        </button>
      </div>
    </div>
  )
}
