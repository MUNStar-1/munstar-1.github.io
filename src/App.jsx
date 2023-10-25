import { useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera, Stage, Environment, Billboard } from '@react-three/drei';
import { LayerMaterial, Depth } from 'lamina';
import { Navbar } from './components/NavBar.jsx';
import { Footer } from './components/Footer.jsx';
import logo from './assets/logo.png';

function Model() {
	const { scene } = useGLTF('/Earth_1_12758.glb')
	const ref = useRef()
	useFrame((state, delta) => (ref.current.rotation.y += delta/15 ))
	return <primitive ref={ref} object={scene} />
}

const Glow = ({ color, scale = 0.5, near = -2, far = 1.4 }) => (
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
)

export default function App() {
  	return (
		<>
      <Navbar />
			<div className="flex h-[50rem] bg-black justify-center items-center">
				<Canvas className="object-cover absolute w-screen">
          <Environment files="./space.hdr" background />
					<PerspectiveCamera />
    			<ambientLight intensity={Math.PI} />
    			<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
          <Glow color="blue" scale={2.4} />
    			<Model position={[0, 0, 0]} />
    		</Canvas>
        <img className="absolute" width='768px' src={logo} />
			</div>
      <div id="about" className="object-cover py-5 w-full max-w-full min-h-[75vh] top-0 flex justify-center bg-black">
			  <div className="flex flex-col md:flex-row md:max-w-screen">
			  	<div className="flex flex-col md:p-8 p-10 leading-normal md:space-y-5 space-y-5">
			  		<div>
			  			<div className="mb-3 text-3xl font-Quicksand text-gray-200">Summary</div>
			  			<div className="mb-3 font-normal text-gray-400">
			  				MUNStar-1 is a student design team based out of Memorial University, in Newfoundland. Its aim is to create a small satellite, called a CubeSat through the Canadian Space Agency’s “CUBICS” Mission. The CubeSat is currently expected to launch in 2026. 
			  			</div>
			  			<div className="mb-3 text-3xl font-Quicksand text-gray-200">What is a CubeSat?</div>
			  			<div className="mb-3 font-normal text-gray-400">
                A CubeSat, short for Cube Satellite, is a type of miniaturized satellite used for various purposes, including scientific research, technology demonstration, and education. CubeSats are small, cube-shaped spacecraft with standardized dimensions, which makes them relatively inexpensive to develop and launch compared to traditional, larger satellites.<br/><br/>
                The most common CubeSat form factor is a 10x10x10 centimeter (1U) cube, with a mass of approximately 1 kilogram. However, variations exist, including 2U (20x10x10 cm), 3U (30x10x10 cm), and so on. These standard sizes allow for easy integration and compatibility with launch systems. MUNStar-1 will be a 3U CubeSat, which is a step up from its predecessor, Killick-1, which was a 2U CubeSat<br/><br/>
                CubeSats are often used by universities, research institutions, and commercial entities to conduct experiments and research in space. They can be deployed as secondary payloads on larger launch missions, reducing the cost of reaching space. Despite their small size, CubeSats can carry a wide range of scientific instruments, sensors, and communication equipment, enabling them to perform a variety of tasks, such as Earth observation, environmental monitoring, technology testing, and more.<br/>
			  			</div>
			  			<div className="mb-3 text-3xl font-Quicksand text-gray-200">Subsystems</div>
                <ul className="list-disc ml-10 text-gray-400">
							    <li><b className="text-gray-300">Mechanical:</b> Concerned with creating the frame of the CubeSat, which includes its design and manufacturing. The mechanical team also deals with proper spacing between stack components, ensuring that they fit within the frame. The mechanical subsystem must design in adherence to the specifications provided by the launcher.</li><br/>
							    <li><b className="text-gray-300">Thermal:</b> This subsystem deals with the reduction of thermal radiation experienced in space, while also considering the heat dissipated by components in the electronic stack and providing engineering design on how to reduce stack heat-exposure.</li><br/>
							    <li><b className="text-gray-300">Attitude Determination & Control:</b> The Attitude Determination & Control (ADCS) subsystem is crucial for ensuring proper pointing of the CubeSat over the area of interest for capturing. The satellite will be in a tumble post-launch, so the ADCS is essential for detumbling the CubeSat, and ensuring it is pointing properly over the region of interest, as well as towards the sun otherwise for charging purposes</li><br/>
							    <li><b className="text-gray-300">Mission Control System:</b> The Mission Control Subsystem (MCS) is responsible for controlling all of the satellite’s subsystems and monitoring their health throughout the journey of the satellite. It is also responsible for collecting and storing all telemetry and science data. The MCS will provide a series of commands to all other subsystems to control the satellite and monitor the health of each subsystem over the duration of its existence in Low-Earth Orbit (LEO). These commands will be sent and received via Inter-Integrated Circuit (I2C) communication protocol, to and from each subsystem as per a predefined mission plan. In doing so, the subsystem will receive updated mission plans via the Communication subsystem when they are received from the ground station located in St. John’s, Newfoundland and Labrador.</li><br/>
							    <li><b className="text-gray-300">Electrical Power Supply:</b> The MUNStar-1 CubeSat power subsystem is a critical component of the system. Without electrical power the mission would fail, as the mission control subsystem (MCS), payload, attitude determination and control subsystem (ADCS), and communication subsystems all require DC power. The main energy source of the satellite are solar panels built on PCB’s which will orient themselves for optimal sun exposure. The satellite depends on solar exposure to be charged. The main power source is four lithium ion batteries. Other than supplying power to the subsystems, the electrical team will be responsible for conforming to NASA specifications in creating a timer circuit PCB, which will ensure the satellite remains fully powered off for the first thirty minutes after its launch. Proper cable routing and battery testing is also essential for satellite success. </li><br/>
                  <li><b className="text-gray-300">Communications:</b> In order to receive data from the satellite, it must be equipped with a ground station. CubeSats communicate with Earth using radio waves. These waves are received by ground stations back on Earth, which downlink the signals and convert the information into its ‘true form’, such as images or data logs.The satellites communicate with earth also ensures that everything on the satellite is running smoothly. It is also needed to perform the mission of MUNStar-1, which is producing delay doppler maps to access sea state in the north atlantic. </li><br/>
                  <li><b className="text-gray-300">Payload:</b> The payload is in charge of what the satellite is supposed to do. In the case of MUNStar-1, the main payload is using Global Navigation Satellite System Reflectometry to produce Delay Doppler Maps, which oceanographers can use to determine the sea state, in a region of interest off the coast of the North Atlantic. </li><br/>
						    </ul>
			  		</div>
			  	</div>
			  </div>
		  </div>
      <Footer />
		</>
  	)
}
