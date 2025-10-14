'use client';
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { useRef } from 'react';

const LaptopModel = () => {
    const gltf = useLoader(GLTFLoader, '/laptop.glb');
    const groupRef = useRef();

    const baseYaw = -0.9; 
    const basePitch = -0.05;

    useFrame(({ mouse }) => {
        if (!groupRef.current) return;
        const targetYaw = baseYaw + mouse.x * 0.5; 
        const targetPitch = basePitch + mouse.y * 0.1;

        groupRef.current.rotation.y = THREE.MathUtils.lerp(
            groupRef.current.rotation.y,
            targetYaw,
            0.08
        );
        groupRef.current.rotation.x = THREE.MathUtils.lerp(
            groupRef.current.rotation.x,
            targetPitch,
            0.08
        );
    });

    return (
        <group ref={groupRef} position={[0.15, -0.9, 0]} rotation={[basePitch, baseYaw, 0]}>
            <primitive object={gltf.scene} scale={5.7} />
        </group>
    );
};

export default LaptopModel;


