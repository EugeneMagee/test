var StockItem = (function() {

  var name = "";
  var description = "";
  var price = 0;
  var availableDate = "";
  var taxable = false;
  var quantityInStock = 0;

  var privateMethod = function() {
    console.log('Inside a private method!');
    privateVariable++;
  }

  var methodToExpose = function() {
    console.log('This is a method I want to expose!');
  }

  var otherMethodIWantToExpose = function() {
    privateMethod();
  }

  return {
      first: methodToExpose,
      second: otherMethodIWantToExpose
  };
})();

StockItem.first();        // Output: This is a method I want to expose!
StockItem.second();       // Output: Inside a private method!
StockItem.methodToExpose; // undefined