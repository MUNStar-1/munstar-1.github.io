import { useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera, Stage, Environment, Billboard } from '@react-three/drei';
import { LayerMaterial, Depth } from 'lamina';
import logo from '../content/logo.png';

const Model = () => {
	const { scene } = useGLTF('/Earth_1_12758.glb')
	const ref = useRef()
	useFrame((state, delta) => (ref.current.rotation.y += delta/15 ))
	return <primitive ref={ref} object={scene} />
};

const Glow = ({ color, scale = 0.5, near = -2, far = 1.4 }) => {
	return (
		<Billboard>
			<mesh>
				<circleGeometry args={[2 * scale, 16]} />
				<LayerMaterial
					transparent
					depthWrite={false}
					blending={THREE.CustomBlending}
					blendEquation={THREE.AddEquation}
					blendSrc={THREE.SrcAlphaFactor}
					blendDst={THREE.DstAlphaFactor}>
					<Depth colorA={color} colorB="black" alpha={1} mode="normal" near={near * scale} far={far * scale} origin={[0, 0, 0]} />
					<Depth colorA={color} colorB="black" alpha={0.5} mode="add" near={-40 * scale} far={far * 1.2 * scale} origin={[0, 0, 0]} />
					<Depth colorA={color} colorB="black" alpha={1} mode="add" near={-15 * scale} far={far * 0.7 * scale} origin={[0, 0, 0]} />
					<Depth colorA={color} colorB="black" alpha={1} mode="add" near={-10 * scale} far={far * 0.68 * scale} origin={[0, 0, 0]} />
				</LayerMaterial>
			</mesh>
		</Billboard>
	);
};

export const Header = () => {
	return (
		<div className="flex h-[50rem] bg-black justify-center items-center">
			<Canvas className="object-cover absolute w-screen">
				<PerspectiveCamera />
				<ambientLight intensity={Math.PI} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
				<Glow color="blue" scale={2.4} />
				<Model position={[0, 0, 0]} />
			</Canvas>
			<img className="absolute" width='768px' src={logo.src} />
		</div>
	);
};

export default Header;