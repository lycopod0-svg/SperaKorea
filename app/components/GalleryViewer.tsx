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
        <div className="w-full max-w-4xl mx-auto">
            {/* Main Viewport */}
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-4 group">
                <Image
                    src={activeMode.src}
                    alt={activeMode.label}
                    fill
                    className="object-contain transition-opacity duration-500"
                    priority
                />
                {/* Overlay Label */}
                <div className="absolute top-2 left-2 md:top-4 md:left-4 px-2 py-1 md:px-4 md:py-2 bg-black/70 backdrop-blur border border-white/20 rounded-lg text-white font-bold tracking-widest uppercase text-[8px] md:text-sm">
                    {activeMode.label}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {MODES.map((mode) => (
                    <button
                        key={mode.id}
                        onClick={() => setActiveMode(mode)}
                        className={`
                relative p-4 rounded-xl border transition-all overflow-hidden group
                ${activeMode.id === mode.id
                                ? "bg-white/10 border-safety-orange ring-1 ring-safety-orange"
                                : "bg-black/40 border-white/10 hover:bg-white/5 hover:border-white/30"}
            `}
                    >
                        <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${activeMode.id === mode.id ? "text-safety-orange" : "text-gray-400 group-hover:text-white"}`}>
                            {mode.label}
                        </div>
                        {/* Active Indicator */}
                        {activeMode.id === mode.id && (
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-safety-orange shadow-[0_0_10px_#FF5E0E]"></div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
