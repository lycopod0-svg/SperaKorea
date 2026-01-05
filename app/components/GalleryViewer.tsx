"use client";

import { useState } from "react";
import Image from "next/image";

const MODES = [
    { id: "3d", label: "3D Mode", src: "/gallery/view_3d_v2.png" },
    { id: "front", label: "Front Screen", src: "/gallery/view_front_v2.png" },
    { id: "rear", label: "Rear Screen", src: "/gallery/view_rear_v2.png" },
    { id: "side", label: "Side Screen", src: "/gallery/view_side_v2.png" },
    { id: "6ch", label: "6ch Screen", src: "/gallery/view_6ch_v2.png" },
    { id: "dvr", label: "DVR Screen", src: "/gallery/view_dvr_v2.png" },
];

export default function GalleryViewer() {
    const [activeMode, setActiveMode] = useState(MODES[0]);

    return (
        <div className="w-full max-w-5xl mx-auto bg-gray-800 rounded-3xl overflow-hidden shadow-2xl relative border border-gray-700">
            {/* Main Viewport */}
            <div className="relative aspect-[21/9] bg-gray-900 flex items-center justify-center overflow-hidden">
                <Image
                    src={activeMode.src}
                    alt={activeMode.label}
                    fill
                    className="object-contain transition-opacity duration-500"
                    priority
                />

                {/* Overlay Label */}
                <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur px-3 py-1 rounded text-xs font-mono text-white border border-white/20 uppercase tracking-widest">
                    {activeMode.id.toUpperCase()} MODE
                </div>
            </div>

            {/* Controls */}
            <div className="bg-gray-900 p-4 border-t border-gray-800 flex justify-center gap-2 overflow-x-auto scrollbar-hide">
                {MODES.map((mode) => (
                    <button
                        key={mode.id}
                        onClick={() => setActiveMode(mode)}
                        className={`
                            px-6 py-2.5 rounded font-display font-semibold transition-all whitespace-nowrap text-xs
                            ${activeMode.id === mode.id
                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200"
                            }
                        `}
                    >
                        {mode.label.toUpperCase()}
                    </button>
                ))}
            </div>
        </div>
    );
}
