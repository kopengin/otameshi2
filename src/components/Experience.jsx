import { Environment, MeshReflectorMaterial, OrbitControls, Text } from "@react-three/drei";
import { JapaneseStyleRoom } from "./JapaneseStyleRoom";
import { degToRad } from "three/src/math/MathUtils.js";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      {/* 左側のテキスト */}
      <Text
        font={"fonts/Poppins-Black.ttf"}
        position={[-2, 0, 1]}
        rotation-y={degToRad(30)}
        lineHeight={1.0}
        textAlign="center"
      >
        Japanese{"\n"}StyleRoom
        <meshBasicMaterial color={"white"} />
      </Text>
      {/* 右側のオブジェクト */}
      <group rotation={[degToRad(10), degToRad(-120), degToRad(0)]} position-x={3.2}>
        <JapaneseStyleRoom scale={0.4} />
      </group>
      {/* 反射床 */}
      <mesh position-y={-1.0} rotation-x={-Math.PI /2 }>
        <planeGeometry args={[100,100]}/>
        <MeshReflectorMaterial
          blur={[100, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={10}
          roughness={1}
          depthScale={1}
          opacity={0.5}
          transparent
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#333"
          metalness={0.5}

        />
      </mesh>
      {/* 環境光 */}
      <Environment preset="sunset" />
    </>
  );
};
