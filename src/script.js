import * as THREE from "three";

// Canvas
const canvas = document.querySelector(".webgl");

// Scene
const scene = new THREE.Scene();

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "#4281ED" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Position
mesh.position.set(0.7, -0.6, 1);

// Scale
mesh.scale.set(1, 0.5, 1);

// Rotation
mesh.rotation.reorder("YXZ");
mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;

// Axes helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(1, 1, 6);
camera.lookAt(mesh.position);
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
