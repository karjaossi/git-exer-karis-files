
//	Calculatinghumanheight.js    Ossi Karjalainen (2018) c

//  2018-09-06 File created.  

process.stdout.write( "\n This program is designed to"
                   +  "\n convert your height from "
				   +  "\n centimeters to inches."
				   +  "\n"
				   +  "\n Input your height in CM: ")

process.stdin.on( "data", function( input_from_user )

{
	// The statements below will be executed automatically after
	// the user has typed in the numbers.
	
	var given_number = Number( input_from_user ) ;
	
	var some_inches = given_number * 0.393700787 ;
	var rounded_inches = Math.floor( some_inches ) ;	
	var feet_1 = Math.floor ( rounded_inches * 0.083334 ) ;
	var inches_1 = Math.floor ( rounded_inches - ( feet_1 * 12 ) ) ;
	var weight_1 = Math.floor ( given_number - 100 )
	
	process.stdout.write( "\n Rounded value is " + rounded_inches
						 + "\n Your height is " + feet_1 + " feet and " + inches_1 + " inches." ) ;
						 
	if (given_number < 60)
	{
		process.stdout.write( "\n "
							+ "\n Only " + given_number + " centimeters?!" 
							+ "\n Are you really that short?" ) ;
	}
	else if ( given_number <= 190 && given_number >= 160 )
	{
		process.stdout.write ("\n "
							+ "\n That is quite average height." ) ;
	}
	
	else if ( given_number > 400 )
	{
		process.stdout.write ("\n "
							+ "\n You might be a giraffe." ) ;
	}	
						
	if ( given_number > 100 && given_number < 220 )
		
	{
		process.stdout.write ("\n "
							+ "\n Your ideal weight is: " + weight_1 + " kg" ) ;
	}
	else if ( weight_1 < 10 && weight_1 > 220)
	{
		process.stdout.write ("\n "
							+ "\n Sorry but your ideal weight couldn't be calculated" ) ;
	}
	
	   process.exit() ;  // This terminates the program.
} ) ;