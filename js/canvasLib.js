/*

This file contains classes and functions for HTML 5 canvas

*/

var Canvas = {

	nextParticleId : 0,
	Particle : function(_cirle, _color, _velocity) {

	    this.id = Canvas.nextParticleId++; // int

	    this.circle = _cirle; // Circle
	    this.color = _color; // String
	    this.velocity = _velocity.times(1/1000); // Point

	    this.speed = Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.y*this.velocity.y);

	    this.draw = function() {

            context.beginPath();

            context.fillStyle = this.color;

            context.arc( this.circle.position.x, this.circle.position.y, this.circle.radius, 0, 2*Math.PI );

            context.fill();

            context.closePath();

	    }

	}

}
