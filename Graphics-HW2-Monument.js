// Import three.js
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
// Import orbit controls
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

// Setup camera
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.z = 150;
const scene = new THREE.Scene();

// Central pivot for everything to rotate around
const monument = new THREE.Object3D();

//Pi value used in rotations
const pi = 3.14159;


//Make the shapes for body
const bodyShape = new THREE.Shape();
bodyShape.moveTo(-2.75, 0);
bodyShape.lineTo(-1.7, 50);
bodyShape.lineTo(1.7, 50);
bodyShape.lineTo(2.75, 0);
bodyShape.lineTo(-2.75, 0);
const bodyGeo = new THREE.ShapeGeometry(bodyShape);

//Dark blue front face
const bodyFrontMat = new THREE.MeshBasicMaterial({ color: new THREE.Color("blue") });
const bodyFront = new THREE.Mesh(bodyGeo, bodyFrontMat);
bodyFront.position.set(0, 0, 2.75);
bodyFront.rotateX(-(2.75 - 1.7) / 50);
monument.add(bodyFront);

//Orange Right Face
const bodyRightMat = new THREE.MeshBasicMaterial({ color: new THREE.Color("orange") });
const bodyRight = new THREE.Mesh(bodyGeo, bodyRightMat);
bodyRight.position.set(2.75, 0, 0);
bodyRight.rotateY(pi / 2);
bodyRight.rotateX(-(2.75 - 1.7) / 50);
monument.add(bodyRight);

//Gray Back Face
const bodyBackMat = new THREE.MeshBasicMaterial({ color: new THREE.Color("rgb(100,100,100)") });
const bodyBack = new THREE.Mesh(bodyGeo, bodyBackMat);
bodyBack.position.set(0, 0, -2.75);
bodyBack.rotateY(pi);
bodyBack.rotateX(-(2.75 - 1.7) / 50);
monument.add(bodyBack);

//Red Left Face
const bodyLeftMat = new THREE.MeshBasicMaterial({ color: new THREE.Color("rgb(250, 0, 0)") });
const bodyLeft = new THREE.Mesh(bodyGeo, bodyLeftMat);
bodyLeft.position.set(-2.75, 0, 0);
bodyLeft.rotateY(3 * pi / 2);
bodyLeft.rotateX(-(2.75 - 1.7) / 50);
monument.add(bodyLeft);


// Creat the shape for the pyramid top
const topShape = new THREE.Shape();
topShape.moveTo(-1.7, 0);
topShape.lineTo(0, 5.5);
topShape.lineTo(1.7, 0);
topShape.lineTo(-1.7, 0);
const topGeo = new THREE.ShapeGeometry(topShape);

//Aqua Front face
const topFrontMat = new THREE.MeshBasicMaterial({ color: 0xFF0D8 });
const topFront = new THREE.Mesh(topGeo, topFrontMat);
topFront.position.set(0, 50.0, 1.7);
topFront.rotateX(-17 / 55);
monument.add(topFront);

//Light Green Right Face
const topRightMat = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
const topRight = new THREE.Mesh(topGeo, topRightMat);
topRight.position.set(1.7, 50, 0);
topRight.rotateY(pi / 2);
topRight.rotateX(-17 / 55);
monument.add(topRight);

//Yellow Back Face
const topBackMat = new THREE.MeshBasicMaterial({ color: 0xFFFF00 });
const topBack = new THREE.Mesh(topGeo, topBackMat);
topBack.position.set(0, 50, -1.7);
topBack.rotateY(Math.PI);
topBack.rotateX(-17 / 55);
monument.add(topBack);

//Magenta Left Face
const topLeftMat = new THREE.MeshBasicMaterial({ color: 0xFF00FF });
const topLeft = new THREE.Mesh(topGeo, topLeftMat);
topLeft.position.set(-1.7, 50, 0);
topLeft.rotateY(3 * pi / 2);
topLeft.rotateX(-17 / 55);
monument.add(topLeft);


// Animate and render
scene.add(monument);

var animate = function () {
    //monument.rotation.y += 0.01;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

var controls = new OrbitControls(camera, renderer.domElement);
animate();

