import THREE from 'three'
import dat from 'dat-gui'
import AbstractApplication from 'scripts/views/AbstractApplication'
import 'three-meshline/THREE.MeshLine'

class Main extends AbstractApplication {

    constructor() {

	super();


        var TAU = 2 * Math.PI;
        var hexagonGeometry = new THREE.Geometry();
        for( var j = 0; j < TAU - .1; j += TAU / 100 ) {
            var v = new THREE.Vector3();
            v.set( Math.cos( j )*300, Math.sin( j )*300, 0 );
            hexagonGeometry.vertices.push( v );
        }
        hexagonGeometry.vertices.push( hexagonGeometry.vertices[ 0 ].clone() );

        var g = new THREE.MeshLine();

        g.setGeometry( hexagonGeometry );

        var material = new THREE.MeshLineMaterial( {
            color: new THREE.Color( 0xed6a5a ),
            opacity: 1,
            dashArray: new THREE.Vector2( 10, 5 ),
            resolution: new THREE.Vector2( window.innerWidth, window.innerHeight ),
            sizeAttenuation: false,
            lineWidth: 10,
            near: this.camera.near,
            far: this.camera.far,
            depthTest: true,
            blending: THREE.NormalBlending,
            transparent: false,
            side: THREE.DoubleSide
        });
        var mesh = new THREE.Mesh( g.geometry, material );
        this.scene.add(mesh);

	this.onWindowResize();

	this.animate();

    }

    animate() {

		super.animate();

    }

}
export default Main;
