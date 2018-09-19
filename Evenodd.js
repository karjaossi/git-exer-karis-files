
//  Evenodd.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-12-12 File created.   2016-12-12 Last modification.

/*  In this program the remainder operator % is used to test
    whether the given number is even or odd.

    The remainder operator returns the remainder left over when
    its left operand is divided by its right operand.
*/

process.stdout.write( "\n This program can find out whether a number"
                   +  "\n is even or odd. Please, give a number: " ) ;

process.stdin.on( "data", function( input_from_user )
{
   var given_number = Number( input_from_user ) ;
   
    if ( isNaN( given_number ) )
   {
	  process.stdout.write( "\n You did not type in a number.\n\n" )
   }
  else
  {
   
   if ( ( given_number  %  2 )  ==  0 )
   {
      process.stdout.write( "\n  " + given_number + " is even.\n\n" ) ;
   }
   
   else
   {
      process.stdout.write( "\n  " + given_number + " is odd. \n\n" ) ;
   }
   
   if ( given_number < 9 ) 
   if ( given_number > 1001 ) 
   {
	   process.stdout.write( "\n  " + given_number + " is not acceptable \n\n" ) ;
   }
   
   const a_random_integer  =  Math.floor( Math.random() * (given_number + 5));
   
   if (given_number > a_random_integer)
	   process.stdout.write( "\n  " + a_random_integer + " is smaller than " + given_number + " you win..." ) ;
   
    if (given_number < a_random_integer)
	   process.stdout.write( "\n  " + a_random_integer + " is larger than " + given_number + " I win !" ) ;
 
    if (given_number == a_random_integer)
	   process.stdout.write( "\n  " + a_random_integer + " is equal to " + given_number + " it's a draw" ) ;
   
  }
   process.exit() ;
} ) ;


