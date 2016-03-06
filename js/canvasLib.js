/*

This file contains classes and functions for HTML 5 canvas

*/

var Canvas = {

	nextParticleId : 0,
	Particle : function(_cirle, _color, _velocity) {

	    this.id = Canvas.nextParticleId++; // int

	    this.circle = _cirle; // Circle
	    this.color = _color; // String
	    this.velocity = _velocity.times(1/1000); // Point in pixels/ms

	    this.speed = Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.y*this.velocity.y);

        this.lastTimeMoved = (new Date()).getTime();

	    this.draw = function() {

            context.beginPath();

            context.fillStyle = this.color;

            context.arc( this.circle.position.x, this.circle.position.y, this.circle.radius, 0, 2*Math.PI );

            context.fill();

            context.closePath();

	    }

        this.move = function() {

            const newTime = (new Date()).getTime();
            const deltaT = newTime-this.lastTimeMoved;
            this.lastTimeMoved = newTime;
            const deltaVelocity = this.velocity.times( deltaT );


            if( ( this.circle.position.x + deltaVelocity.x + this.rayon > theCanvas.width
                    && this.velocity.x > 0
                )
             || (this.circle.position.x + deltaVelocity.x - this.rayon < 0
                    && this.velocity.x < 0
                ) ) {

                this.velocity.x *= -1;

            }

            if( ( this.circle.position.y + deltaVelocity.y + this.rayon > theCanvas.height
                    && this.velocity.y > 0
                )
             || (this.circle.position.y + deltaVelocity.y - this.rayon < 0
                    && this.velocity.y < 0
                ) ) {

                this.velocity.y *= -1;

            }

            this.circle.position.x += Math.floor(deltaVelocity.x);
            this.circle.position.y += Math.floor(deltaVelocity.y);

        }

	}

}
