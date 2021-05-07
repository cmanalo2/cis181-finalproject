"use strict";

/*
Carlo Manalo
5/6/2021
CIS 181 Final Project
Page: Parking Javascript
*/

/*can be hard for tenants to know which side to
be parked on during the day, or when parking
switches sides on Sundays - this is for easy 
reference */
 
   
var initialDate = new Date(2014,0,5,20,0,0,0);
var initialSide = "EVEN";
var todaysDate = new Date();

var milDifference = todaysDate.getTime() - initialDate.getTime();
var daysDifference = Math.ceil(milDifference/1000/60/60/24);
var weekNumber = Math.ceil(daysDifference/7);

if ( weekNumber % 2 == 1 ) { 
document.write("ODD"); 
} 
else { 
document.write("EVEN");
}
