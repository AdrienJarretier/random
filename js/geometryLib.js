/*

This file contains classes and functions related to geometry

*/



/**
 * Creates a new Point in 2D space
 * @class
 */
var Point =  function(_x, _y) {

    this.x = _x;
    this.y = _y;

    this.distanceTo = function( _otherPoint ) {

        return Math.sqrt(
         ( this.x - _autrePoint.x )*( this.x - _autrePoint.x )
        +( this.y - _autrePoint.y )*( this.y - _autrePoint.y )
        );

    }

};
