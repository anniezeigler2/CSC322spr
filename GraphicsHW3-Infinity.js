// Import THREE
import * as THREE from
    'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
// Import OrbitControls
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth /
    window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);

// Create OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Adds smooth motion
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 10;
controls.maxDistance = 200;

// Create scene
const scene = new THREE.Scene();

// Create a circle
const circleMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff });
const circlePoints = [];
const radius = 25; // Circle radius
const segments = 100; // Number of segments to approximate the circle
for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * 2 * Math.PI;
    const x = Math.sin(theta) / (1 + Math.cos(theta) * Math.cos(theta));
    const y = Math.sin(theta) * Math.cos(theta) / (1 + Math.cos(theta) * Math.cos(theta));
    circlePoints.push(new THREE.Vector3(x * 10, y * 10, 0)); //Scale up points 
}

const circleGeometry = new THREE.BufferGeometry().setFromPoints(circlePoints);
const circle = new THREE.Line(circleGeometry, circleMaterial);
scene.add(circle);

// Animation loop for rendering and controls update
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Required for damping to work
    renderer.render(scene, camera);
}

// Start the animation Loop
animate();