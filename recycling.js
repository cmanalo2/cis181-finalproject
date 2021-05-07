"use strict";

/*
Carlo Manalo
5/6/2021
CIS 181 Final Project
Page: Parking Javascript
*/

 /*same script as parking, as recycling 
 coincides with which side of street the 
 cars are parked on*/
   
var initialDate = new Date(2014,0,5,20,0,0,0);
var initialSide = "NO RECYCLING";
var todaysDate = new Date();

var milDifference = todaysDate.getTime() - initialDate.getTime();
var daysDifference = Math.ceil(milDifference/1000/60/60/24);
var weekNumber = Math.ceil(daysDifference/7);

if ( weekNumber % 2 == 1 ) { 
document.write("YES RECYCLING"); 
} 
else { 
document.write("NO RECYCLING");
}
