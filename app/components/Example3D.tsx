"use client";
import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

function STLViewer({ url }: { url: string }) {
  const geometry = useLoader(STLLoader, url);
  return (
    <Stage>
      <mesh geometry={geometry}>
        <meshStandardMaterial color="#aaa" />
      </mesh>
      <OrbitControls />
    </Stage>
  );
}

export function Example3D({ stlUrl, codeUrl }: { stlUrl: string; codeUrl: string }) {
  return (
    <div style={{ position: "relative", width: "100%", height: 400, marginBottom: 24 }}>
      <Canvas style={{ width: "100%", height: "100%", background: "#222" }}>
        <Suspense fallback={null}>
          <STLViewer url={stlUrl} />
        </Suspense>
      </Canvas>
      <a
        href={codeUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          top: 12,
          right: 16,
          background: "rgba(0,0,0,0.7)",
          color: "#fff",
          padding: "6px 12px",
          borderRadius: 6,
          fontSize: 14,
          textDecoration: "none",
          zIndex: 10,
        }}
      >
        View Source Code
      </a>
    </div>
  );
}
