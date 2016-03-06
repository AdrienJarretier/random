/*

This file contains classes and functions for HTML 5 canvas

*/

var Canvas = {



	nextParticleId : 0,
	Particle : function(_geometryShape, _color, _velocity) {

	    this.id = Canvas.nextParticleId++; // int

	    this.geometryShape = _geometryShape; // Circle , Rectangle ...
	    this.color = _color; // String
	    this.velocity = _velocity.times(1/1000); // Point in pixels/ms

	    this.speed = Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.y*this.velocity.y);

        this.lastTimeMoved = (new Date()).getTime();

	    this.draw = function( _context ) {

            _context.beginPath();

            _context.fillStyle = this.color;

            if( this.geometryShape.shapeType == "CIRCLE" ) {
            	_context.arc( this.geometryShape.position.x, this.geometryShape.position.y, this.geometryShape.radius, 0, 2*Math.PI );
            }
            else if( this.geometryShape.shapeType == "RECTANGLE" ) {
            	_context.fillRect( this.geometryShape.position.x, this.geometryShape.position.y, this.geometryShape.dimensions.x, this.geometryShape.dimensions.y );
            }

            _context.fill();

            _context.closePath();

	    }

        this.move = function() {

            const newTime = (new Date()).getTime();
            const deltaT = newTime-this.lastTimeMoved;
            this.lastTimeMoved = newTime;
            const deltaVelocity = this.velocity.times( deltaT );


            if( ( this.geometryShape.position.x + deltaVelocity.x + this.rayon > theCanvas.width
                    && this.velocity.x > 0
                )
             || (this.geometryShape.position.x + deltaVelocity.x - this.rayon < 0
                    && this.velocity.x < 0
                ) ) {

                this.velocity.x *= -1;

            }

            if( ( this.geometryShape.position.y + deltaVelocity.y + this.rayon > theCanvas.height
                    && this.velocity.y > 0
                )
             || (this.geometryShape.position.y + deltaVelocity.y - this.rayon < 0
                    && this.velocity.y < 0
                ) ) {

                this.velocity.y *= -1;

            }

            this.geometryShape.position.x += Math.floor(deltaVelocity.x);
            this.geometryShape.position.y += Math.floor(deltaVelocity.y);

        }

	}

}
