import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import vertexShader from "./main.vert";
import fragmentShader from "./main.frag";
import * as THREE from "three";

function Backgroung() {
  const meshRef = useRef();

  const [mouse, setMouse] = useState([0, 0]);
  const resolution = [window.innerWidth, window.innerHeight];

  useEffect(() => {
    const handleResize = () => {
      resolution[0] = window.innerWidth;
      resolution[1] = window.innerHeight;
      meshRef.current.material.uniforms.u_resolution.value = resolution;
      meshRef.current.material.uniforms.u_resolution.needsUpdate = true;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.material.uniforms.u_time.value = clock.elapsedTime;
    meshRef.current.material.uniforms.u_mouse.value = mouse;
  });

  const handleMouseMove = (event) => {
    const x = event.clientX / window.innerWidth;
    const y = 1 - event.clientY / window.innerHeight;
    setMouse([x, y]);
  };

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={resolution} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          u_time: { value: 0 },
          u_mouse: { value: mouse },
          u_resolution: { value: resolution },
        }}
        onMouseMove={handleMouseMove}
      />
    </mesh>
  );
}

function CanvasWrapper() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <Canvas>
        <Backgroung />
      </Canvas>
    </div>
  );
}

export default CanvasWrapper;
