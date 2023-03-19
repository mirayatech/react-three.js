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

// Group
const group = new THREE.Group();
group.position.set(0, 1, 0);
group.scale.y = 2;
group.rotation.y = 0.8;
scene.add(group);

//cube 1
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "#4281ED" })
);
group.add(cube1);

//cube 2
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "#E4F0FF" })
);
cube2.position.set(-2, 0, 0);
group.add(cube2);

//cube 3
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "#30518F" })
);
cube3.position.set(2, 0, 0);
group.add(cube3);

// Axes helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(1, 1, 6);
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

const clock = new THREE.Clock();

// Animations
const tick = () => {
  // Clock
  const elapsedTime = clock.getElapsedTime();
  console.log(elapsedTime);

  // Object
  cube1.rotation.y = elapsedTime * Math.PI * 2;
  cube2.position.y = Math.sin(elapsedTime);
  camera.lookAt(cube2.position);

  // Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
