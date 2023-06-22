import {useStore} from "../hooks/useStore"
import Cube from  "./Apple.js"
export default function Cubes () {
	const [cubes] = useStore((state) => [
		state.cubes
	])
    console.log("cubes ka texture" , cubes.texture)
	return cubes.map (({key , pos , texture})=> {
        return (
          < Cube key={key} position={pos} texture={texture} />
        )
    })
}