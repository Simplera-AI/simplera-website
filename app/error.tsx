"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="text-6xl font-bold text-white mb-4">Oops</p>
      <h1 className="text-2xl font-semibold text-white mb-2">
        Something went wrong
      </h1>
      <p className="text-text-secondary mb-8 max-w-md">
        An unexpected error occurred. Please try again.
      </p>
      <button onClick={reset} className="btn-primary">
        Try Again
      </button>
    </div>
  );
}
