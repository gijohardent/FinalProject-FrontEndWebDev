export default function Header() {
  return (
    <div className="relative isolate overflow-hidden bg-slate-50 dark:bg-gray-900 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      ></div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      ></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="font-display text-5xl font-semibold tracking-tight text-teal-500 sm:text-7xl">
            klab.at space
          </h2>
          <p className="font-body mt-8 text-pretty text-lg font-medium text-yellow-800 sm:text-xl/8">
            a social space - a getaway - a garden
          </p>
        </div>
      </div>
    </div>
  );
}
