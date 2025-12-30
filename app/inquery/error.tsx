'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Inquiry Page Error:', error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full border-l-4 border-red-500">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>

                <div className="bg-gray-50 p-4 rounded mb-6 overflow-auto max-h-60">
                    <p className="font-mono text-sm text-gray-800 whitespace-pre-wrap break-all">
                        {error.message || "Unknown error occurred"}
                    </p>
                    {error.digest && (
                        <p className="font-mono text-xs text-gray-500 mt-2">
                            Digest: {error.digest}
                        </p>
                    )}
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={
                            // Attempt to recover by trying to re-render the segment
                            () => reset()
                        }
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                    >
                        Try again
                    </button>
                    <a
                        href="/"
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
                    >
                        Go Home
                    </a>
                </div>
            </div>
        </div>
    );
}
