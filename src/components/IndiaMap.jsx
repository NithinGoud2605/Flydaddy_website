import React, { useState, memo, useCallback } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import { Map, Lightbulb, MapPin } from "lucide-react";
import { indianDestinations } from "../data/destinations";

// India TopoJSON - Using world atlas and filtering for India
const indiaGeoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const IndiaMap = ({ onDestinationClick }) => {
    const [hoveredState, setHoveredState] = useState("");
    const [hoveredCity, setHoveredCity] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleMarkerClick = useCallback((destination) => {
        if (onDestinationClick) {
            onDestinationClick(destination);
        }
    }, [onDestinationClick]);

    const handleMouseEnter = useCallback((name) => {
        setHoveredState(name);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredState("");
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-hidden relative">
            {/* Loading State */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-50 bg-white/80 backdrop-blur-sm">
                    <div className="text-center">
                        <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-600 font-semibold">Loading India Map...</p>
                    </div>
                </div>
            )}
            
            {/* Subtle Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-300/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl"></div>
            </div>

            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 800,
                    center: [80, 22]
                }}
                className="w-full h-full relative z-10"
                style={{ width: "100%", height: "100%" }}
            >
                <ZoomableGroup center={[80, 22]} zoom={1} minZoom={1} maxZoom={4}>
                    <Geographies geography={indiaGeoUrl}>
                        {({ geographies }) => {
                            if (isLoading) setIsLoading(false);
                            // Filter for India only
                            const indiaGeo = geographies.find(
                                (geo) => geo.properties.NAME === "India" || 
                                         geo.properties.NAME_LONG === "India" ||
                                         geo.properties.NAME_EN === "India" ||
                                         geo.properties.ISO_A2 === "IN"
                            );
                            
                            if (!indiaGeo) {
                                // If India not found, show all geographies as fallback
                                return geographies.map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onMouseEnter={() => handleMouseEnter(geo.properties.NAME || geo.properties.NAME_LONG || "")}
                                        onMouseLeave={handleMouseLeave}
                                        style={{
                                            default: {
                                                fill: geo.properties.NAME === "India" || geo.properties.ISO_A2 === "IN" 
                                                    ? "#fed7aa" 
                                                    : "#f3f4f6",
                                                stroke: geo.properties.NAME === "India" || geo.properties.ISO_A2 === "IN"
                                                    ? "#fdba74"
                                                    : "#e5e7eb",
                                                strokeWidth: 0.5,
                                                outline: "none",
                                            },
                                            hover: {
                                                fill: geo.properties.NAME === "India" || geo.properties.ISO_A2 === "IN"
                                                    ? "#f97316"
                                                    : "#e5e7eb",
                                                stroke: geo.properties.NAME === "India" || geo.properties.ISO_A2 === "IN"
                                                    ? "#ea580c"
                                                    : "#d1d5db",
                                                strokeWidth: 1,
                                                outline: "none",
                                                cursor: "pointer",
                                            },
                                            pressed: {
                                                fill: geo.properties.NAME === "India" || geo.properties.ISO_A2 === "IN"
                                                    ? "#ea580c"
                                                    : "#d1d5db",
                                                stroke: geo.properties.NAME === "India" || geo.properties.ISO_A2 === "IN"
                                                    ? "#c2410c"
                                                    : "#9ca3af",
                                                strokeWidth: 1,
                                                outline: "none",
                                            },
                                        }}
                                    />
                                ));
                            }
                            
                            // Show only India
                            return (
                                <Geography
                                    key={indiaGeo.rsmKey}
                                    geography={indiaGeo}
                                    onMouseEnter={() => handleMouseEnter("India")}
                                    onMouseLeave={handleMouseLeave}
                                    style={{
                                        default: {
                                            fill: "#fed7aa",
                                            stroke: "#fdba74",
                                            strokeWidth: 0.5,
                                            outline: "none",
                                        },
                                        hover: {
                                            fill: "#f97316",
                                            stroke: "#ea580c",
                                            strokeWidth: 1,
                                            outline: "none",
                                            cursor: "pointer",
                                        },
                                        pressed: {
                                            fill: "#ea580c",
                                            stroke: "#c2410c",
                                            strokeWidth: 1,
                                            outline: "none",
                                        },
                                    }}
                                />
                            );
                        }}
                    </Geographies>

                    {/* City Markers */}
                    {indianDestinations.map((destination) => (
                        <Marker key={destination.id} coordinates={destination.coordinates}>
                            <g
                                onClick={() => handleMarkerClick(destination)}
                                onMouseEnter={() => setHoveredCity(destination)}
                                onMouseLeave={() => setHoveredCity(null)}
                                className="cursor-pointer"
                                style={{ transform: "translate(-6px, -6px)" }}
                            >
                                {/* Pulse Ring */}
                                <circle cx={6} cy={6} r={8} fill="#059669" opacity={0.3}>
                                    <animate attributeName="r" from="8" to="16" dur="2s" repeatCount="indefinite" />
                                    <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
                                </circle>

                                {/* Main Marker */}
                                <circle 
                                    cx={6} cy={6} r={6} 
                                    fill="#059669" 
                                    stroke="#fff" 
                                    strokeWidth={2}
                                />
                                <circle cx={6} cy={6} r={2} fill="#fff" />
                            </g>
                        </Marker>
                    ))}
                </ZoomableGroup>
            </ComposableMap>

            {/* State Tooltip */}
            <AnimatePresence>
                {hoveredState && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-16 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
                    >
                        <div className="bg-white/98 backdrop-blur-xl px-6 py-3 rounded-xl border-2 border-orange-200 shadow-2xl">
                            <span className="text-gray-900 text-base font-black flex items-center gap-2">
                                <span className="text-xl">🇮🇳</span> 
                                <span>{hoveredState}</span>
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* City Info Card */}
            <AnimatePresence>
                {hoveredCity && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
                    >
                        <div className="bg-white/98 backdrop-blur-xl rounded-2xl border-2 border-orange-100 shadow-2xl p-5 min-w-[320px]">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <span className="text-3xl">📍</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-black text-gray-900 truncate mb-1">
                                        {hoveredCity.name}
                                    </h3>
                                    <p className="text-xs text-gray-600 mb-3 font-semibold">
                                        {hoveredCity.region} • {hoveredCity.category}
                                    </p>
                                    <div className="flex items-center gap-3 text-sm mb-3">
                                        <span className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
                                            <span className="text-amber-500">⭐</span>
                                            <span className="font-black text-gray-900">{hoveredCity.rating}</span>
                                        </span>
                                        <span className="text-gray-300">•</span>
                                        <span className="text-orange-600 font-bold">{hoveredCity.duration}</span>
                                    </div>
                                    <div className="flex items-baseline gap-2 pt-2 border-t border-gray-200">
                                        <span className="text-2xl font-black text-orange-600">
                                            ₹{hoveredCity.price.toLocaleString('en-IN')}
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
                className="absolute bottom-6 right-6 bg-white/98 backdrop-blur-xl rounded-2xl border-2 border-orange-100 p-5 z-40 shadow-2xl"
            >
                <h4 className="text-gray-900 font-black text-base mb-4 flex items-center gap-2">
                    <MapPin className="text-orange-600" size={20} />
                    <span>Explore India</span>
                </h4>
                <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-emerald-600 shadow-lg ring-2 ring-emerald-200"></div>
                        <span className="text-gray-700 font-semibold text-sm">Popular Cities</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded bg-orange-200 border border-orange-300"></div>
                        <span className="text-gray-700 font-semibold text-sm">States</span>
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

export default memo(IndiaMap);
