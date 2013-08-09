Spec
====


# What #

A fast, prototypicaly inherited, super-calling constructor-maker

# Why? #

Makes protypical inheritance a bit easier.

# Usage #

require()

    var createSpec = require('spec-js');

Make a constructor

    function Shape(settings){
        this.sides = settings.sides;
    }

Overwrite the identifier with a specd version

    Shape = createSpec(Shape);

This creates a specd version of Shape that inherrits from Object.

To inherit from this constructor:

    function Square(settings){
        this.sides = 4;
        this.sideLength = settings.sideLength;
    }