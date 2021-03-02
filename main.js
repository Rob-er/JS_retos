// 1
/* In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
error_printer(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
error_printer(s) => "8/22" */

function printerError(s) {
    
    let abc = /[N-Z]/gi;
    let res = (s).match(abc);
    if (res === null){
      res = 0
      return res + "/" + s.length
    } else{
     
      return (res.length + "/" + s.length)
    
    }
}
  

// 2

/* It's pretty straightforward. Your goal is to create a function that removes the first 
   and last characters of a string. You're given one parameter,  the original string.
  You don't have to worry with strings with less than two characters. */

  /* function removeChar(str){
    let abc = /[A-Z]/gi;
    let res = str.match(abc).shift()
    console.log(str)
   
}

removeChar("eloquent") */

/* function filter_list(l) {
  lista = [];
  l.forEach(el => {
    typeof el === 'number' ? lista.push(el) : ''
  })
  return lista
   // Return a new array with the strings filtered out
 }

 filter_list([1,'a','b',0,15]) */

//Eercicio 2

/* Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries 
the "instructions" for the development and functioning of living organisms. */

/* In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
You have function with one side of the DNA (string, except for Haskell); 
you need to get the other complementary side. DNA strand is never empty or there is no DNA at all 
(again, except for Haskell). */

 /* function DNAStrand(dna){
  let tes = dna.match(/[A-T]/gi);
  for(let i = 0; i<= dna.length; i++){
    tes[i] === 'A' ?  tes[i] = 'T' : tes[i] === 'T' ? tes[i] = 'A' : tes[i] = 'G'
  }
  return dna
}

console.log(DNAStrand('TATGGT')) */

// otro
/* Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51 */

function digPow(n, p){
  let part = String(n).match(/[0-9]/gi)

  let res = part.reduce((acc, el, index) => {
   return acc += Math.pow(Number(el), p+index)
  },0)

  return res % n === 0 ? res / n : -1
}

digPow(46288, 3)









