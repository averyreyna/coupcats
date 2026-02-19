import { AlertCircle } from "lucide-react";

export interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary?: () => void;
}

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#0f1117] px-4 text-center">
      <AlertCircle className="h-12 w-12 text-amber-500" />
      <h1 className="text-lg font-semibold text-white">Something went wrong</h1>
      <p className="max-w-md text-sm text-gray-400">{error.message}</p>
      {resetErrorBoundary && (
        <button
          type="button"
          onClick={resetErrorBoundary}
          className="rounded-lg bg-amber-500/20 px-4 py-2 text-sm font-medium text-amber-400 hover:bg-amber-500/30"
        >
          Try again
        </button>
      )}
    </div>
  );
}
