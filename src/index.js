module.exports = function zeros(expression) {
  
  function factorial(n) {
    if (n==0) {
      return 1;
    } else {
      return n * factorial(n-1);
    }
  }
  
  function doublefactorial(n) {
    if (n==0) {
      return 1;
    } else {
      return n * factorial(n-2);
    }
  }
  
}
