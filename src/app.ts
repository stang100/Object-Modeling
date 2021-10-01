// abstract library
import { DrawingCommon } from './common';
import * as THREE from 'three'

// A class for our application state and functionality
class Drawing extends DrawingCommon {

    constructor (canv: HTMLElement) {
        super (canv)
    }

    /*
	Set up the scene during class construction
	*/
	initializeScene(){
        const objectRoot = new THREE.Group();

        //main body (root is at the center of feet of penguin)
        var geometry: THREE.BufferGeometry = new THREE.CylinderGeometry(1, 1, 2, 100);
        var material = new THREE.MeshPhongMaterial( { color: 0x000000} );
        var body = new THREE.Mesh( geometry, material );

        body.scale.set(0.75, 0.75, 0.75);
        body.rotateY(90 * Math.PI / 180);
        objectRoot.add( body );

        //lower body
        var geometry: THREE.BufferGeometry = new THREE.SphereGeometry(1., 100, 100);
        var material = new THREE.MeshPhongMaterial( { color: 0x000000} );
        var bottom = new THREE.Mesh( geometry, material );

        bottom.position.y = -1;
        body.add( bottom );

        //head
        var geometry: THREE.BufferGeometry = new THREE.SphereGeometry(1.3, 100, 100);
        var material = new THREE.MeshPhongMaterial( { color: 0x000000} );
        var head = new THREE.Mesh( geometry, material );

        head.translateY(1.5);
        head.scale.set(0.9, 0.9, 0.9);
        body.add( head );

        //nose
        var geometry: THREE.BufferGeometry = new THREE.ConeGeometry(0.2, 0.5, 100);
        var materialToon = new THREE.MeshToonMaterial( { color: 0xFFFF00} );
        var nose = new THREE.Mesh( geometry, materialToon );

        nose.rotateX(-1 * 90 * Math.PI / 180);
        nose.translateX(0);
        nose.translateY(1.5);
        nose.translateZ(-0.1);
        head.add( nose );

        //white middle
        var geometry: THREE.BufferGeometry = new THREE.CylinderGeometry(0.7, 0.7, 1.5, 100);
        var materialToon = new THREE.MeshToonMaterial( { color: 0xFFFFFF} );
        var whiteMiddle = new THREE.Mesh( geometry, materialToon );

        whiteMiddle.translateZ(-0.4);
        whiteMiddle.translateY(-0.5);
        body.add( whiteMiddle );

        //white lower
        var geometry: THREE.BufferGeometry = new THREE.SphereGeometry(.7, 100, 100);
        var materialToon = new THREE.MeshToonMaterial( { color: 0xFFFFFF} );
        var whiteLower = new THREE.Mesh( geometry, materialToon );

        whiteLower.translateZ(-0.4);
        whiteLower.position.y = -1.25;
        body.add( whiteLower );

        //white top
        var geometry: THREE.BufferGeometry = new THREE.SphereGeometry(0.7, 100, 100);
        var materialToon = new THREE.MeshToonMaterial( { color: 0xFFFFFF} );
        var whiteTop = new THREE.Mesh( geometry, materialToon );

        whiteTop.translateZ(-0.4);
        whiteTop.position.y = 0.25;
        body.add( whiteTop );

        //yellow middle
        var geometry: THREE.BufferGeometry = new THREE.CylinderGeometry(0.85, 0.85, 1.4, 100);
        var materialToon = new THREE.MeshToonMaterial( { color: 0xFFFF00} );
        var yellowMiddle = new THREE.Mesh( geometry, materialToon );

        yellowMiddle.translateZ(-0.19);
        yellowMiddle.translateY(-0.41);
        body.add( yellowMiddle );

        //yellow lower
        var geometry: THREE.BufferGeometry = new THREE.SphereGeometry(.8, 100, 100);
        var materialToon = new THREE.MeshToonMaterial( { color: 0xFFFF00} );
        var yellowLower = new THREE.Mesh( geometry, materialToon );

        yellowLower.translateZ(-0.26);
        yellowLower.position.y = -1.15;
        body.add( yellowLower );

        //yellow top
        var geometry: THREE.BufferGeometry = new THREE.SphereGeometry(0.85, 100, 100);
        var materialToon = new THREE.MeshToonMaterial( { color: 0xFFFF00} );
        var yellowTop = new THREE.Mesh( geometry, materialToon );

        yellowTop.translateZ(-0.19);
        yellowTop.position.y = 0.3;
        body.add( yellowTop );

        //left foot
        var geometry: THREE.BufferGeometry = new THREE.BoxGeometry(0.5, 0.2, 1);
        var material = new THREE.MeshPhongMaterial( { color: 0xFFFF00} );
        var leftFoot = new THREE.Mesh( geometry, material );

        leftFoot.translateZ(-0.4);
        leftFoot.translateX(-0.4);
        leftFoot.translateY(-1);
        bottom.add( leftFoot );

        //right foot
        var geometry: THREE.BufferGeometry = new THREE.BoxGeometry(0.5, 0.2, 1);
        var material = new THREE.MeshPhongMaterial( { color: 0xFFFF00} );
        var rightFoot = new THREE.Mesh( geometry, material );

        rightFoot.translateZ(-0.4);
        rightFoot.translateX(0.4);
        rightFoot.translateY(-1);
        bottom.add( rightFoot );

        //right flap
        var geometry: THREE.BufferGeometry = new THREE.BoxGeometry(2, 0.2, 1);
        var material = new THREE.MeshPhongMaterial( { color: 0x000000} );
        var rightFlap = new THREE.Mesh( geometry, material );

        rightFlap.rotateZ(45 * Math.PI / 180);
        rightFlap.translateY(0.8);
        rightFlap.translateX(-0.8);
        
        body.add( rightFlap );

        //left flap
        var geometry: THREE.BufferGeometry = new THREE.BoxGeometry(2, 0.2, 1);
        var material = new THREE.MeshPhongMaterial( { color: 0x000000} );
        var leftFlap = new THREE.Mesh( geometry, material );

        leftFlap.rotateZ(-1 * 45 * Math.PI / 180);
        leftFlap.translateY(0.8);
        leftFlap.translateX(0.8);
        
        body.add( leftFlap );

        //left eye
        var geometry: THREE.BufferGeometry = new THREE.SphereGeometry(.2, 100, 100);
        var materialToon = new THREE.MeshToonMaterial( { color: 0xFFFFFF} );
        var leftEye = new THREE.Mesh( geometry, materialToon );

        leftEye.translateZ(-1.1);
        leftEye.translateY(1.75);
        leftEye.translateX(-0.4);
        
        body.add( leftEye );

        //right eye
        var geometry: THREE.BufferGeometry = new THREE.SphereGeometry(.2, 100, 100);
        var materialToon = new THREE.MeshToonMaterial( { color: 0xFFFFFF} );
        var rightEye = new THREE.Mesh( geometry, materialToon );

        rightEye.translateZ(-1.1);
        rightEye.translateY(1.75);
        rightEye.translateX(0.4);
        
        body.add( rightEye );

        //left pupil
        var geometry: THREE.BufferGeometry = new THREE.SphereGeometry(.18, 100, 100);
        var material = new THREE.MeshPhongMaterial( { color: 0x000000} );
        var leftPupil = new THREE.Mesh( geometry, material );

        leftPupil.translateZ(-1.125);
        leftPupil.translateY(1.75);
        leftPupil.translateX(-0.4);
        
        body.add( leftPupil );

        //right pupil
        var geometry: THREE.BufferGeometry = new THREE.SphereGeometry(.18, 100, 100);
        var material = new THREE.MeshPhongMaterial( { color: 0x000000} );
        var rightPupil = new THREE.Mesh( geometry, material );

        rightPupil.translateZ(-1.125);
        rightPupil.translateY(1.75);
        rightPupil.translateX(0.4);
        
        body.add( rightPupil );



        /*
        //top cover
        var geometry: THREE.BufferGeometry = new THREE.BoxGeometry(2.1, 0.05, 3);
        var material = new THREE.MeshPhongMaterial( { color: 0x00ff00} );
        var topCover = new THREE.Mesh( geometry, material );

        topCover.position.set(-1.05,0.15,0);
        objectRoot.add( topCover );

        //inner pages
        var geometry: THREE.BufferGeometry = new THREE.BoxGeometry(2, 0.3, 2.9);
        var materialLambert = new THREE.MeshLambertMaterial( { color: 0xffffff} );
        var innerPage = new THREE.Mesh( geometry, materialLambert );

        innerPage.position.x = -1;
        topCover.add(innerPage);
        objectRoot.add( innerPage );

        //bottom cover
        var geometry: THREE.BufferGeometry = new THREE.BoxGeometry(2.1, 0.05, 3);
        var material = new THREE.MeshPhongMaterial( { color: 0x00ff00} );
        var bottomCover = new THREE.Mesh( geometry, material );

        bottomCover.position.x = -1.05;
        bottomCover.position.y = -0.15;
        innerPage.add(bottomCover);
        objectRoot.add( bottomCover );
        
        //rings
        var geometry: THREE.BufferGeometry = new THREE.TorusGeometry(0.2, 0.05, 10, 100);
        var material = new THREE.MeshPhongMaterial( { color: 0x808080} );
        var mesh = new THREE.Mesh( geometry, material );

        innerPage.add(mesh);
        objectRoot.add( mesh );

        var geometry: THREE.BufferGeometry = new THREE.TorusGeometry(0.2, 0.05, 10, 100);
        var material = new THREE.MeshPhongMaterial( { color: 0x808080} );
        var mesh = new THREE.Mesh( geometry, material );

        mesh.translateZ(0.5);
        innerPage.add(mesh);
        objectRoot.add( mesh );

        var geometry: THREE.BufferGeometry = new THREE.TorusGeometry(0.2, 0.05, 10, 100);
        var material = new THREE.MeshPhongMaterial( { color: 0x808080} );
        var mesh = new THREE.Mesh( geometry, material );

        mesh.translateZ(1);
        innerPage.add(mesh);
        objectRoot.add( mesh );

        var geometry: THREE.BufferGeometry = new THREE.TorusGeometry(0.2, 0.05, 10, 100);
        var material = new THREE.MeshPhongMaterial( { color: 0x808080} );
        var mesh = new THREE.Mesh( geometry, material );

        mesh.translateZ(-0.5);
        innerPage.add(mesh);
        objectRoot.add( mesh );

        var geometry: THREE.BufferGeometry = new THREE.TorusGeometry(0.2, 0.05, 10, 100);
        var material = new THREE.MeshPhongMaterial( { color: 0x808080} );
        var mesh = new THREE.Mesh( geometry, material );

        mesh.translateZ(-1);
        innerPage.add(mesh);
        objectRoot.add( mesh );

        //title sheet
        var geometry: THREE.BufferGeometry = new THREE.BoxGeometry(1.5, 0.06, 1);
        var material = new THREE.MeshPhongMaterial( { color: 0xffffff} );
        var mesh = new THREE.Mesh( geometry, material );

        mesh.position.set(-1.05,0.15, 0.8);
        topCover.add(mesh);
        objectRoot.add( mesh );
        
        //emoji


        //legs

        //hands

        */

        this.scene.add( objectRoot );
    }


	/*
	Update the scene during requestAnimationFrame callback before rendering
	*/
	updateScene(time: DOMHighResTimeStamp){}
}

// a global variable for our state.  We implement the drawing as a class, and 
// will have one instance
var myDrawing: Drawing;

// main function that we call below.
// This is done to keep things together and keep the variables created self contained.
// It is a common pattern on the web, since otherwise the variables below woudl be in 
// the global name space.  Not a huge deal here, of course.

function exec() {
    // find our container
    var div = document.getElementById("drawing");

    if (!div) {
        console.warn("Your HTML page needs a DIV with id='drawing'")
        return;
    }

    // create a Drawing object
    myDrawing = new Drawing(div);
}

exec()