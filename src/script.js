import * as THREE from "three";

// Canvas
const canvas = document.querySelector(".webgl");

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "#4281ED" });
const mesh = new THREE.Mesh(geometry, material);
// Position
mesh.position.x = 1;
mesh.position.y = -0.1;
mesh.position.z = 1;
scene.add(mesh);

// Axes helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 6;
camera.position.y = 1;
camera.position.x = 1;

scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
