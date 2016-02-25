/*

This file contains classes and functions related to geometry

*/


/**
 * Creates a new Circle at a given position witht the speicifed radius
 * @class
 */
var Circle = function(_position, _radius) {

    this.position = _position; // Point
    this.radius = _radius; // non null positive Number

}

/**
 * Creates a new Point in 2D space
 * @class
 */
var Point = function(_x, _y) {

    this.x = _x;
    this.y = _y;

    this.distanceTo = function( _otherPoint ) {

        return Math.sqrt(
         ( this.x - _autrePoint.x )*( this.x - _autrePoint.x )
        +( this.y - _autrePoint.y )*( this.y - _autrePoint.y )
        );

    }

};

/**
 * Return a random Signed Integer between min and max included
 *
 * @param {Signed Integer} min - lower bound (included)
 * @param {Signed Integer} max - upper bound (included)
 *
 * @returns {Signed Integer}
 */
function randomNb(min, max) {

    return Math.floor(Math.random()*(max-min+1))+min;

}
