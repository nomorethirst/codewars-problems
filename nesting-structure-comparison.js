Array.prototype.sameStructureAs = function (that) {
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.

    // Note: You are given a function isArray(o) that returns
    // whether its argument is an array.
    //console.log(JSON.stringify(this))
    //console.log(JSON.stringify(that))
    return JSON.stringify(this, (k,v) => typeof v !== 'object' ? undefined : v )
                .split('')
                .filter( x => x === '[' || x === ']' || x === ',' )
                .join('')
           === 
           JSON.stringify(that, (k,v) => typeof v !== 'object' ? undefined : v )
                .split('')
                .filter( x => x === '[' || x === ']' || x === ',' )
                .join('')
};

// TODO: Replace examples and use TDD development by writing your own tests

// These are some CW specific test methods available:
//    Test.expect(boolean, [optional] message)
//    Test.assertEquals(actual, expected, [optional] message)
//    Test.assertSimilar(actual, expected, [optional] message)
//    Test.assertNotEquals(actual, expected, [optional] message)

// NodeJS assert is also automatically required for you.
//    assert(true)
//    assert.strictEqual({a: 1}, {a: 1})
//    assert.deepEqual({a: [{b: 1}]}, {a: [{b: 1}]})

// You can also use Chai (http://chaijs.com/) by requiring it yourself
// var expect = require("chai").expect;
// var assert = require("chai").assert;
// require("chai").should();

console.log([1,'[',']'].sameStructureAs(['[',']',1]) /*=== true*/)
console.log([ [], ']' ].sameStructureAs([ [], {} ]) /*=== true*/)