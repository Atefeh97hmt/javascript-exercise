
 //LCM of two numbers
  
 function gcd(a, b)
 {
 if (b == 0)
     return a;
 return gcd(b, a % b);
 }
  
 function lcm(a, b)
 {
     return (a / gcd(a, b)) * b;
 }
     
     let a = 15, b = 20;
     document.write("LCM of " + a + " and "
     + b + " is " + lcm(a, b));
      
  
