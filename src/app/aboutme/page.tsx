"use client";
import { Canvas, extend } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import Badge from "@/components/IdBadge";
import { useState, useEffect } from "react";
import AboutText from "@/components/aboutText";
import { Anybody } from "next/font/google";

const anybody = Anybody({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Multiple weights
});


extend({ MeshLineGeometry, MeshLineMaterial });
useGLTF.preload("/assets/3d/card.glb");
useTexture.preload("/tag_texture.png");

export default function About() {
  const [size, setSize] = useState({ width:1600, height:800 });

  useEffect(() => {

    const handleResize = () => setSize({ width: window.innerWidth >=500 ? window.innerWidth : 100, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  return (
    <main className={`${anybody.className} relative h-full w-full `}>
      <div className=" h-screen w-full z-50 ">
      <Canvas
          camera={{ position: [0, 0, 10], fov: 25 }}
          style={{ backgroundColor: "transparent" }}
        >
          <ambientLight intensity={Math.PI} />
          <Physics
            debug={false}
            interpolate
            gravity={[0, -40, 0]}
            timeStep={1 / 60}
          >
            <Badge windowWidth={size.width} /> {/* Pass window width */}
            </Physics>
          <Environment background >

            <Lightformer
              intensity={2}
              color="white"
              position={[0, -1, 5]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={3}
              color="white"
              position={[-1, -1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={3}
              color="white"
              position={[1, 1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={10}
              color="white"
              position={[-10, 0, 14]}
              rotation={[0, Math.PI / 2, Math.PI / 3]}
              scale={[100, 10, 1]}
            />
          </Environment>
        </Canvas>
        
      </div>
      <AboutText />
    </main>
  );
}