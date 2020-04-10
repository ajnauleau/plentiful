
const Plentiful = () => {
    //Code goes here
    console.log('This is a message letting you know Plentiful has loaded');
};


// Sorting Algorithms

Plentiful.sorts = {};

Plentiful.sorts.timSort = require('./sorts/tim-sort');
Plentiful.sorts.mergeSort = require('./sorts/merge-sort');
Plentiful.sorts.insertionSort = require('./sorts/insertion-sort');


// Search Algorithms

Plentiful.search = {};

Plentiful.search.binarySearch = require('./search/binary-search');


// Recursive Algorithms

Plentiful.recurse = {};

Plentiful.recurse.recursive = require('./recurse/recursive');


// Modifying Algorithms

Plentiful.modify = {};

Plentiful.modify.reverse = require('./modify/reverse');


module.exports = Plentiful;
