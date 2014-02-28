var test = require('tape'),
    createSpec = require('../');


//Base
function Shape(){
    this.sides = null;
}
Shape = createSpec(Shape);


//Inherits from Shape
function Square(){
    this.sides = 4;
}
Square = createSpec(Square, Shape);


//Inherits from Square
function RoundedSquare(){
    this.cornerRadius = 10;
}
RoundedSquare = createSpec(RoundedSquare, Square);



test('inherit from parent', function (t) {
    t.plan(4);

    var shape = new Shape();

    t.ok(shape instanceof Object);
    t.ok(shape instanceof Shape);
    t.ok('sides' in shape);
    t.ok(shape.sides === null);
    t.end();
});

test('inherit from inherited parent', function (t) {
    t.plan(4);

    var square = new Square();

    t.ok(square instanceof Object);
    t.ok(square instanceof Shape);
    t.ok(square instanceof Square);
    t.ok(square.sides === 4);
    t.end();
});

test('inherit from object', function (t) {
    t.plan(6);

    var roundedSquare = new RoundedSquare();

    t.ok(roundedSquare instanceof Object);
    t.ok(roundedSquare instanceof Shape);
    t.ok(roundedSquare instanceof Square);
    t.ok(roundedSquare instanceof RoundedSquare);
    t.ok(roundedSquare.sides === 4);
    t.ok(roundedSquare.cornerRadius === 10);
    t.end();
});

test('inherited constructor has correct super', function (t) {
    t.plan(3);

    t.ok(RoundedSquare.__super__ === Square);
    t.ok(RoundedSquare.__super__.__super__ === Shape);
    t.ok(Square.__super__ === Shape);
});