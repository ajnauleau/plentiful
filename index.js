
const Plenfitul = () => {
    //Code goes here
    console.log('This is a message letting you know Plentiful has loaded');
};


// Sorting Algorithms

Plenfitul.sorts = {};

Plentiful.sorts.timSort = require('./sorts/tim-sort');
Plentiful.sorts.mergeSort = require('./sorts/merge-sort');
Plentiful.sorts.insertionSort = require('./sorts/insertion-sort');


// Search Algorithms

Plenfitul.search = {};

Plentiful.search.binarySearch = require('./search/binary-search');



// Recursive Algorithms

Plenfitul.recurse = {};

Plentiful.recurse.recursive = require('./recurse/recursive');


export default Plentiful;
