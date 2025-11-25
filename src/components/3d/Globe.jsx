import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';

const Globe = () => {
    const globeRef = useRef();

    // Create a simple earth texture programmatically or use a color
    // For a "premium" look without external assets immediately, we can use a shader or a stylish wireframe/dot representation
    // But for now, let's use a nice dark blue sphere with some atmosphere glow

    useFrame((state) => {
        if (globeRef.current) {
            globeRef.current.rotation.y += 0.001;
        }
    });

    return (
        <group>
            {/* Main Globe */}
            <Sphere ref={globeRef} args={[2.5, 64, 64]}>
                <meshPhongMaterial
                    color="#1e293b"
                    emissive="#0f172a"
                    specular="#111"
                    shininess={10}
                    map={null} // We could load a texture here later
                    bumpScale={0.05}
                />
            </Sphere>

            {/* Atmosphere Glow */}
            <Sphere args={[2.6, 64, 64]}>
                <meshBasicMaterial
                    color="#38bdf8"
                    transparent
                    opacity={0.1}
                    side={THREE.BackSide}
                />
            </Sphere>

            {/* Example Markers */}
            <Marker position={[1.5, 1.5, 1]} label="Paris" />
            <Marker position={[-1, 0.5, 2]} label="New York" />
            <Marker position={[2, 0.5, 0.5]} label="Tokyo" />
        </group>
    );
};

const Marker = ({ position, label }) => {
    const [hovered, setHovered] = React.useState(false);

    return (
        <group position={position}>
            <mesh
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshBasicMaterial color={hovered ? "#fbbf24" : "#38bdf8"} />
            </mesh>
            {hovered && (
                <Html distanceFactor={10}>
                    <div className="bg-dark/80 backdrop-blur-sm px-2 py-1 rounded text-white text-xs whitespace-nowrap border border-primary/30">
                        {label}
                    </div>
                </Html>
            )}
        </group>
    );
};

export default Globe;
