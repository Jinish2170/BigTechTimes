import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 800;

    const posArray = new Float32Array(particlesCnt * 3);
    const colorArray = new Float32Array(particlesCnt * 3);

    for (let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
      colorArray[i] = Math.random() * 0.5 + 0.5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const material = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      color: 0x33D9B2,
    });

    const particles = new THREE.Points(particlesGeometry, material);
    scene.add(particles);

    camera.position.z = 2;

    const animate = () => {
      requestAnimationFrame(animate);

      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      particlesGeometry.dispose();
      material.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>;
}

export default ParticleBackground;
