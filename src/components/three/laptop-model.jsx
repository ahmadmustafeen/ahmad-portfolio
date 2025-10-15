'use client';
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { useRef } from 'react';

const LaptopModel = ({ mousePosition, screenTextureUrl }) => {
    const gltf = useLoader(GLTFLoader, '/psx_laptop.glb');
    const texture = screenTextureUrl ? useLoader(THREE.TextureLoader, screenTextureUrl) : null;
    const groupRef = useRef();

    const baseYaw = -0.1;
    const basePitch = 0.1;

    useFrame(() => {
        if (!groupRef.current || !mousePosition) return;

        const targetYaw = baseYaw + mousePosition.x * 0.3;
        const targetPitch = basePitch + mousePosition.y * 0.2;

        groupRef.current.rotation.y = THREE.MathUtils.lerp(
            groupRef.current.rotation.y,
            targetYaw,
            0.03
        );
        groupRef.current.rotation.x = THREE.MathUtils.lerp(
            groupRef.current.rotation.x,
            targetPitch,
            0.03
        );
    });

    const screenMesh = gltf.scene.getObjectByName('Screen');

    return (
        <group ref={groupRef} position={[0, -3, 0]} rotation={[basePitch, baseYaw, 0]}>
            <primitive object={gltf.scene} scale={27} />
            {texture && (
                screenMesh ? (
                    screenMesh.material = new THREE.MeshBasicMaterial({ map: texture })
                ) : (
                    <mesh position={[0.2, 3.65, -1.25]} rotation={[-0.05, 0, 0]}>
                        <planeGeometry args={[11.1, 3.1]} />
                        <meshBasicMaterial map={texture} toneMapped={false} />
                    </mesh>




                )
            )}
        </group>
    );
};

export default LaptopModel;
