/*

This file contains classes and functions related to geometry

*/

var Geometry = {

    /**
     * Creates a new Circle at a given position witht the specifed radius
     * @class
     */
    Circle : function(_position, _radius) {

        this.shapeType = "CIRCLE";

        this.position = _position; // Point
        this.radius = _radius; // non null positive Number

        this.volume = Math.PI*this.radius*this.radius;

    },

    /**
     * Creates a new Rectangle at a given position with the specifed size
     * @class
     */
    Rectangle : function(_position, _dimensions) {

        this.shapeType = "RECTANGLE";

        this.position = _position; // Point
        this.dimensions = _dimensions; // Point

        this.volume = this.dimensions.x*this.dimensions.y;


        /**
         * increases the volmume by modifying one of the dimensions
         *
         * @param {Number} _volumeToAdd - volume that will be added to this object
         * @param {String} _dimensionToMod - "h" or "v"
         *
         * @returns {Signed Integer}
         */
        this.increaseVolume = function( _volumeToAdd , _dimensionToMod ) {

            this.volume += _volumeToAdd;

            if ( _dimensionToMod == "h" ) {

                this.dimensions.x = this.volume/this.dimensions.y;

            }
            else {

                this.dimensions.y = this.volume/this.dimensions.x;

            }

        }

    },

    /**
     * Creates a new Point in 2D space
     * @class
     */
    Point : function(_x, _y) {

        this.x = _x;
        this.y = _y;

        this.distanceTo = function( _otherPoint ) {

            return Math.sqrt(
             ( this.x - _autrePoint.x )*( this.x - _autrePoint.x )
            +( this.y - _autrePoint.y )*( this.y - _autrePoint.y )
            );

        }

        this.times = function( _factor ) {

            return new Geometry.Point(this.x*_factor, this.y*_factor);

        }

    },

    /**
     * Return a random Signed Integer between min and max included
     *
     * @param {Signed Integer} min - lower bound (included)
     * @param {Signed Integer} max - upper bound (included)
     *
     * @returns {Signed Integer}
     */
    randomNb : function(min, max) {

        return Math.floor(Math.random()*(max-min+1))+min;

    }
}
