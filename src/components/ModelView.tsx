import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import Lights from "./Lights"
import IPhone from "./IPhone"
import { RefObject, Suspense } from "react"
import * as THREE from 'three'
import Loader from "./Loader"

interface ModelViewProps {
    index: number;
    groupRef: RefObject<THREE.Group>;
    gsapType: string;
    controlRef: RefObject<any>;
    setRotationState: (state: any) => void;
    size: string;
    item: {
        title: string;
        color: string[];
        img: string;
    };
}


const ModelView: React.FC<ModelViewProps> = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
    return (
        <View
            index={index}
            id={gsapType}
            className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
        >
            {/* Ambient Light */}
            <ambientLight intensity={0.3} />

            <PerspectiveCamera makeDefault position={[0, 0, 4]} />

            <Lights />

            <OrbitControls
                makeDefault
                ref={controlRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.4}
                target={new THREE.Vector3(0, 0, 0)}
                onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
            />

            <group ref={groupRef} name={`${index === 1} ? 'small' : 'large'`} position={[0, 0 ,0]}>
                <Suspense fallback={<Loader />}>
                    <IPhone
                        scale={index === 1 ? [15, 15, 15] : [17, 17, 17] }
                        item={item}
                        size={size}
                    />
                </Suspense>

            </group>
        </View>
    )
}

export default ModelView
