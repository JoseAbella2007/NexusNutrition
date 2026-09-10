import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function CampoDeParticulas({ cantidad = 220 }) {
  const referenciaPuntos = useRef(null);

  const posiciones = useMemo(() => {
    /* eslint-disable react-hooks/purity -- posiciones decorativas al azar, no afectan el render */
    const arreglo = new Float32Array(cantidad * 3);
    for (let i = 0; i < cantidad; i++) {
      const radio = 4.5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arreglo[i * 3] = radio * Math.sin(phi) * Math.cos(theta);
      arreglo[i * 3 + 1] = radio * Math.sin(phi) * Math.sin(theta);
      arreglo[i * 3 + 2] = radio * Math.cos(phi);
    }
    /* eslint-enable react-hooks/purity */
    return arreglo;
  }, [cantidad]);

  useFrame((_, delta) => {
    if (referenciaPuntos.current) {
      referenciaPuntos.current.rotation.y += delta * 0.015;
    }
  });

  return (
    <points ref={referenciaPuntos}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[posiciones, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#B7FF00"
        size={0.03}
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export default function Portada3D() {
  return (
    <Canvas
      className="lienzo-portada3d"
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 7], fov: 45 }}
    >
      <Suspense fallback={null}>
        <CampoDeParticulas />
      </Suspense>
    </Canvas>
  );
}
