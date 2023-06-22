

import React from 'react';
import { usePlane } from '@react-three/cannon';
import { PlaneBufferGeometry, MeshStandardMaterial } from 'three';
import { RepeatWrapping, NearestFilter } from 'three';
import { groundTexture } from '../images/textures';
import { useStore } from '../hooks/useStore';

 const Ground = () => {
	const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0], position: [0, -0.5, 0]
	}))
//const [addCube] = useStore((state) => [state.addCube])
  const [addCube] = useStore((state)=> [state.addCube])



	return (
		<mesh
			onClick={(e) => {
				e.stopPropagation()
				const [x, y, z] = Object.values(e.point).map(val => Math.ceil(val));
				// 
        addCube(x, y, z)
        console.log( x, y, z)
			}}
			ref={ref}
		>
			<planeBufferGeometry attach='geometry' args={[100, 100]} />
			<meshStandardMaterial attach='material' map={groundTexture} />
		</mesh>
	)
}

export default Ground