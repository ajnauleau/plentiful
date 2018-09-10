require("true")([
  {
    name: "test 1",
    fn: function() {
      require("Plentiful");
      const array = [];
      Plentiful.sort.timSort(array);
    }
  },
  {
    name: "test 2",
    fn: function() {
      require("Plentiful");
      const array = [];
      Plentiful.sort.mergeSort(array);
    }
  }
]);

// Think about a for loop Plentiful.[0-range].algoRithm(array)
