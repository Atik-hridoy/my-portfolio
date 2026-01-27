"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Line } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const SECTION_COLORS: Record<string, string> = {
  intro: "#06b6d4",
  experience: "#8b5cf6",
  work: "#a855f7",
  skills: "#3b82f6",
  thoughts: "#ec4899",
  connect: "#ef4444",
};

function ParticleSystem({ color }: { color: string }) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.Group>(null);

  const COUNT = 250;
  const RANGE = 20;

  const positions = useMemo(() => {
    const arr: THREE.Vector3[] = [];
    for (let i = 0; i < COUNT; i++) {
      arr.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * RANGE,
          (Math.random() - 0.5) * RANGE,
          (Math.random() - 0.5) * RANGE
        )
      );
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current || !linesRef.current) return;

    const t = clock.elapsedTime;
    pointsRef.current.rotation.y = t * 0.03;
    pointsRef.current.rotation.x = t * 0.01;

    // Clear previous lines
    while (linesRef.current.children.length > 0) {
      linesRef.current.remove(linesRef.current.children[0]);
    }

    // Draw connecting lines
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const d = positions[i].distanceTo(positions[j]);
        if (d < 4) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            positions[i],
            positions[j],
          ]);
          const material = new THREE.LineBasicMaterial({
            color: color,
            opacity: 0.15 * (1 - d / 4),
            transparent: true,
          });
          const line = new THREE.Line(geometry, material);
          linesRef.current.add(line);
        }
      }
    }
  });

  const positionsArray = useMemo(
    () => new Float32Array(positions.flatMap((v) => [v.x, v.y, v.z])),
    [positions]
  );

  return (
    <>
      <Points ref={pointsRef} positions={positionsArray} stride={3}>
        <PointMaterial
          transparent
          color={color}
          size={0.05}
          depthWrite={false}
        />
      </Points>

      <group ref={linesRef} />
    </>
  );
}

function CameraController() {
  const { camera, mouse } = useThree();
  const scrollRef = useRef(0);

  useFrame(() => {
    // Mouse parallax
    camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
    camera.position.y += (mouse.y * 2 - camera.position.y) * 0.05;

    // Galaxy warp zoom + scroll
    camera.position.z += (6 + scrollRef.current - camera.position.z) * 0.03;

    camera.lookAt(0, 0, 0);
  });

  // Scroll control
  if (typeof window !== "undefined") {
    window.onscroll = () => {
      scrollRef.current = window.scrollY * 0.002;
    };
  }

  return null;
}

export default function SpaceExperience3D({
  section = "intro",
}: {
  section?: string;
}) {
  const color = SECTION_COLORS[section] || "#06b6d4";

  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 65 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.6} />
      <ParticleSystem color={color} />
      <CameraController />
    </Canvas>
  );
}
