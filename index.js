function receivesAFunction(callback) {
    return callback();
}
function returnsANamedFunction() {
    return function() {
        return "This is a named function";
    };
}

const returnsAnAnonymousFunction = function() {
    return function() {
        return "This is an anonymous function";
    };
};

module.exports = {
    returnsANamedFunction,
    returnsAnAnonymousFunction
};