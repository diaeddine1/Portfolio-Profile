import { AfterViewInit, Component, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

@Component({
  selector: 'laptop',
  standalone: true,
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css'],
  providers: [
    {
      provide: Window,
      useValue: Window,
    },
  ],
})
export class LaptopComponent implements AfterViewInit, OnDestroy {
  @ViewChild('threeCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private model!: THREE.Group;

  private clock = new THREE.Clock();

  ngAfterViewInit(): void {
    this.initializeThreeJS();
    this.load3DModel();
    this.animate();

    // Handle window resize
   
    
     
  }

  ngOnDestroy(): void {
    // Cleanup event listener when component is destroyed
    //window.removeEventListener('resize', this.onResize.bind(this));
  }

  private initializeThreeJS(): void {
    // Set up the scene
    this.scene = new THREE.Scene();
  
    // Set up the camera
    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.camera.position.set(0, 1.5, 5); // Adjust Y and Z for framing
    this.camera.lookAt(0, 1, 0); // Focus on model's center
  
    // Set up the renderer
    const canvas = this.canvasRef.nativeElement;
    this.renderer = new THREE.WebGLRenderer({ canvas });
  
    // Ensure the canvas resizes according to the container
    this.updateRendererSize();
  
    // Set up lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1); // Ambient light
    this.scene.add(ambientLight);
  
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    this.scene.add(directionalLight);
  }
  
  private updateRendererSize(): void {
    const canvas = this.canvasRef.nativeElement;
    const parentElement = canvas.parentElement;
    
    if (parentElement) {
      // Set the canvas size dynamically based on the parent container
      this.renderer.setSize(parentElement.offsetWidth, parentElement.offsetHeight);
      this.camera.aspect = parentElement.offsetWidth / parentElement.offsetHeight;
      this.camera.updateProjectionMatrix();
    }
  }
  
  // private onResize(force:any): void {
  //   // Update camera aspect ratio and renderer size on window resize
  //   // this.camera.aspect = window.innerWidth / window.innerHeight;
  //   // this.camera.updateProjectionMatrix();
  //   // this.renderer.setSize(window.innerWidth, window.innerHeight);
  //   const canvas = this.renderer.domElement;
  // // look up the size the canvas is being displayed
  // const width = canvas.clientWidth;
  // const height = canvas.clientHeight;

  // // adjust displayBuffer size to match
  // if (force || canvas.width !== width || canvas.height !== height) {
  //   // you must pass false here or three.js sadly fights the browser
  //   this.renderer.setSize(width, height, false);
  //   this.camera.aspect = width / height;
  //   this.camera.updateProjectionMatrix();

  //   // update any render target sizes here
  // }
  // }
  
  

  private load3DModel(): void {
    // Setup Draco loader
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('../../assets/draco/'); // Path to Draco files

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    // Load the 3D model
    loader.load(
      '../../assets/laptop.gltf', // Replace with your model's path
      (gltf) => {
        this.model = gltf.scene;
        this.model.rotation.y = -Math.PI/2; // Ensure model faces camera
        this.model.position.set(0, 0, 0); // Center the model
        this.scene.add(this.model);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('An error occurred while loading the model:', error);
      }
    );
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());

    // Animation loop
    const delta = this.clock.getDelta();
    this.renderer.render(this.scene, this.camera);
    window.addEventListener('resize',()=> this.renderer.setSize(window.innerWidth, window.innerHeight,false));
  }

 
}
