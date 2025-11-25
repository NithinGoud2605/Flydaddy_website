import React, { useState, memo, useCallback } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import { indianDestinations } from "../data/destinations";

// India TopoJSON
const indiaGeoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";

const IndiaMap = ({ onDestinationClick }) => {
    const [hoveredState, setHoveredState] = useState("");
    const [hoveredCity, setHoveredCity] = useState(null);

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
                <ZoomableGroup center={[80, 22]} zoom={1} minZoom={0.8} maxZoom={3}>
                    <Geographies geography={indiaGeoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => handleMouseEnter(geo.properties.ST_NM)}
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
                            ))
                        }
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
                        <div className="bg-white px-5 py-2.5 rounded-xl border border-orange-200 shadow-lg">
                            <span className="text-gray-800 text-sm font-bold flex items-center gap-2">
                                <span>🇮🇳</span> {hoveredState}
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
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-xl p-4 min-w-[300px]">
                            <div className="flex items-start gap-3">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">📍</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-bold text-gray-900 truncate">
                                        {hoveredCity.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 mb-2">
                                        {hoveredCity.region} • {hoveredCity.category}
                                    </p>
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="flex items-center gap-1">
                                            <span className="text-amber-500">⭐</span>
                                            <span className="font-bold text-gray-700">{hoveredCity.rating}</span>
                                        </span>
                                        <span className="text-gray-300">•</span>
                                        <span className="text-orange-600 font-medium">{hoveredCity.duration}</span>
                                    </div>
                                    <div className="mt-2 flex items-baseline gap-1">
                                        <span className="text-xl font-bold text-orange-600">
                                            ₹{hoveredCity.price.toLocaleString('en-IN')}
                                        </span>
                                        <span className="text-xs text-gray-500">per person</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Legend */}
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 p-4 z-40 shadow-lg">
                <h4 className="text-gray-800 font-bold text-sm mb-3 flex items-center gap-2">
                    <span>🇮🇳</span> Explore India
                </h4>
                <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-emerald-600"></div>
                        <span className="text-gray-600">Popular Cities</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-orange-200"></div>
                        <span className="text-gray-600">States</span>
                    </div>
                </div>
                <p className="mt-3 text-[10px] text-gray-400">Click markers for details</p>
            </div>
        </div>
    );
};

export default memo(IndiaMap);
