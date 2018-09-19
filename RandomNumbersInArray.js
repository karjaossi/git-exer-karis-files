
//  RandomNumbersInArray.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2017-08-14 File created.   2017-08-14 Last modification.

/* This program generates random integers and puts them into an array.
   The generated random numbers will be in range 1 ... 40

*/

var random_numbers  =  [] ; // this array is initially empty

var number_counter = 0 ;

while ( number_counter < 7 )
{
   // Math.random() returns a double value in the range 0 .... 0.99999999
   // The returned random value can be zero but it cannot be one.

   random_numbers.push( Math.floor( Math.random() * 40 + 1 ) ) ;

   number_counter ++ ;
}

process.stdout.write(
     "\n\n Random numbers printed with a traditional for loop:\n\n " ) ;

for ( let number_index  =  0 ;
          number_index  <  random_numbers.length ;
          number_index  ++ )
{
   process.stdout.write( "  "  +  random_numbers[ number_index ] ) ;
}

process.stdout.write( "\n\n" ) ;

