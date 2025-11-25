import React, { useState, memo, useCallback } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import { Map, Lightbulb, Globe } from "lucide-react";
import { internationalDestinations } from "../data/destinations";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const InteractiveMap = ({ onDestinationClick }) => {
    const [hoveredCountry, setHoveredCountry] = useState("");
    const [hoveredDestination, setHoveredDestination] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleMarkerClick = useCallback((destination) => {
        if (onDestinationClick) {
            onDestinationClick(destination);
        }
    }, [onDestinationClick]);

    const handleMouseEnter = useCallback((name) => {
        setHoveredCountry(name);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredCountry("");
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-blue-50 overflow-hidden relative">
            {/* Loading State */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-50 bg-white/80 backdrop-blur-sm">
                    <div className="text-center">
                        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-600 font-semibold">Loading World Map...</p>
                    </div>
                </div>
            )}
            
            {/* Subtle Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl"></div>
            </div>

            <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: 140 }}
                className="w-full h-full relative z-10"
                style={{ width: "100%", height: "100%" }}
            >
                <ZoomableGroup center={[0, 20]} zoom={1} minZoom={1} maxZoom={4}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) => {
                            if (isLoading) setIsLoading(false);
                            return geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => handleMouseEnter(geo.properties.name || geo.properties.NAME || geo.properties.NAME_LONG || "")}
                                    onMouseLeave={handleMouseLeave}
                                    style={{
                                        default: {
                                            fill: "#e2e8f0",
                                            stroke: "#cbd5e1",
                                            strokeWidth: 0.5,
                                            outline: "none",
                                        },
                                        hover: {
                                            fill: "#3b82f6",
                                            stroke: "#1d4ed8",
                                            strokeWidth: 1,
                                            outline: "none",
                                            cursor: "pointer",
                                        },
                                        pressed: {
                                            fill: "#2563eb",
                                            stroke: "#1e40af",
                                            strokeWidth: 1,
                                            outline: "none",
                                        },
                                    }}
                                />
                            ));
                        }}
                    </Geographies>

                    {/* Destination Markers */}
                    {internationalDestinations.map((destination, index) => (
                        <Marker key={destination.id} coordinates={destination.coordinates}>
                            <g
                                onClick={() => handleMarkerClick(destination)}
                                onMouseEnter={() => setHoveredDestination(destination)}
                                onMouseLeave={() => setHoveredDestination(null)}
                                className="cursor-pointer"
                                style={{ transform: "translate(-6px, -6px)" }}
                            >
                                {/* Pulse Ring */}
                                <circle cx={6} cy={6} r={8} fill="#ef4444" opacity={0.3}>
                                    <animate attributeName="r" from="8" to="16" dur="2s" repeatCount="indefinite" />
                                    <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
                                </circle>

                                {/* Main Marker */}
                                <circle 
                                    cx={6} cy={6} r={6} 
                                    fill="#ef4444" 
                                    stroke="#fff" 
                                    strokeWidth={2}
                                />
                                <circle cx={6} cy={6} r={2} fill="#fff" />
                            </g>
                        </Marker>
                    ))}
                </ZoomableGroup>
            </ComposableMap>

            {/* Country Tooltip */}
            <AnimatePresence>
                {hoveredCountry && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-16 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
                    >
                        <div className="bg-white/98 backdrop-blur-xl px-6 py-3 rounded-xl border-2 border-blue-200 shadow-2xl">
                            <span className="text-gray-900 text-base font-black flex items-center gap-2">
                                <Globe className="text-blue-600" size={18} />
                                <span>{hoveredCountry}</span>
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Destination Info Card */}
            <AnimatePresence>
                {hoveredDestination && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
                    >
                        <div className="bg-white/98 backdrop-blur-xl rounded-2xl border-2 border-blue-100 shadow-2xl p-5 min-w-[320px]">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <span className="text-3xl">✈️</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-black text-gray-900 truncate mb-1">
                                        {hoveredDestination.name}
                                    </h3>
                                    <p className="text-xs text-gray-600 mb-3 font-semibold flex items-center gap-1">
                                        <span>📍</span>
                                        <span>{hoveredDestination.country} • {hoveredDestination.region}</span>
                                    </p>
                                    <div className="flex items-center gap-3 text-sm mb-3">
                                        <span className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
                                            <span className="text-amber-500">⭐</span>
                                            <span className="font-black text-gray-900">{hoveredDestination.rating}</span>
                                        </span>
                                        <span className="text-gray-300">•</span>
                                        <span className="text-blue-600 font-bold">{hoveredDestination.duration}</span>
                                    </div>
                                    <div className="flex items-baseline gap-2 pt-2 border-t border-gray-200">
                                        <span className="text-2xl font-black text-blue-600">
                                            ₹{hoveredDestination.price.toLocaleString('en-IN')}
                                        </span>
                                        <span className="text-xs text-gray-500 font-medium">per person</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Legend */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 right-6 bg-white/98 backdrop-blur-xl rounded-2xl border-2 border-blue-100 p-5 z-40 shadow-2xl"
            >
                <h4 className="text-gray-900 font-black text-base mb-4 flex items-center gap-2">
                    <Map className="text-blue-600" size={20} />
                    <span>World Destinations</span>
                </h4>
                <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-red-500 shadow-lg ring-2 ring-red-200"></div>
                        <span className="text-gray-700 font-semibold text-sm">Popular Destinations</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded bg-slate-300 border border-slate-400"></div>
                        <span className="text-gray-700 font-semibold text-sm">Countries</span>
                    </div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-600 font-medium flex items-center gap-2">
                        <Lightbulb className="text-amber-500" size={14} />
                        <span>Click markers for details</span>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default memo(InteractiveMap);
