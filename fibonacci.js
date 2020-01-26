function fibonacciSequence(input) {
    if (input===1) 
  {
    return [0, 1];
  } 

  else 
  {
    var s = fibonacciSequence(input - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
    //Type your code here.
}