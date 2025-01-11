import * as THREE from 'three';
import { useEffect, useRef } from 'react';

function Background() {
  const refContainer = useRef(null);
  
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight)
    refContainer.current && refContainer.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry( 1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x49CAC8});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;


    const animate = function() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    const handleResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', handleResize)

    return () => {
        window.removeEventListener('resize', handleResize)
    }
  }, [])
  return(
    <div
        ref = {refContainer}
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
