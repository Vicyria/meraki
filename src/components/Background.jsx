import * as THREE from 'three';
import { useEffect, useRef } from 'react';

function Background() {
  const refContainer = useRef(null);
  
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xAFDFEB); // Set gradient background color

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append renderer only once
    if (refContainer.current && !refContainer.current.hasChildNodes()) {
      refContainer.current.appendChild(renderer.domElement);
    }

    // Plane geometry for the background gradient
    const geometry = new THREE.PlaneGeometry(2, 2);

    // Create a custom shader material for gradient effect
    const material = new THREE.ShaderMaterial({
      uniforms: {
        topColor: { value: new THREE.Color(0xf0f0f0) }, // Light blue (top)
        bottomColor: { value: new THREE.Color(0x07D18E) }, // Blue (bottom)
        offset: { value: 33 },
        exponent: { value: 30 },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * vec4(vPosition, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          float h = normalize(vPosition).y;
          vec3 color = mix(bottomColor, topColor, h * 0.5 + 0.5);
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Scale the plane to cover the entire viewport
    plane.scale.set(window.innerWidth, window.innerHeight, 1);

    // Set up camera
    camera.position.z = 1; // Move camera slightly closer to the plane

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={refContainer}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Keeps the background behind other elements
      }}
    />
  );
};

export default Background;