/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* Example One: using d3 to style elements in the DOM */

d3.select('div#example1')
  .style('color', 'green');

d3.select('div#firstDiv')
  .style('color', '#FF0018')

d3.select('div#secondDiv')
  .style('color', '#FFA52C')

d3.select('div#thirdDiv')
  .style('color', '#FFFF41')

d3.select('div#fourthDiv')
  .style('color', '#008018')

d3.select('div#fifthDiv')
  .style('color', '#0000F9')

d3.select('div#lastDiv')
  .style('color', '#86007D')

/*  TODO 1: Rainbow Colors
  Use the D3 to change the background color of the firstDiv to vividred(#FF0018)
  Use the D3 to change the background color of the secondDiv to Deep Saffron(#FFA52C)
  Use the D3 to change the background color of the thirdDiv to Maximum Yellow(#FFFF41)
  Use the D3 to change the background color of the fourthDiv to Green (#008018)
  Use the D3 to change the background color of the fifthDiv to Blue (#0000F9)
  Use the D3 to change the background color of the lastDiv to Philippine Violet(#86007D)
*/

// d3.select('');

/* 
  Example Two: 
  Use d3 to load JSON data: Load the data from file sales.json
  Display the conference name in an element for each item.  
*/

d3.json('../data/sales.json')
  .then((data) => {
    d3.select('#sales-data')
      .selectAll('div')
      .data(data)
      .enter()
      .append('div')
      // set the text for each div
      .text(d => d.conference_name)
      // add a style for each div
      .style('background-color', '#FFA52C')
      .style('color', '#0000F9')
      .style('padding', '1em')
      .style('margin', '1px')
  })


/*
  TODO 2:
  Load the monthly sales data. Display the month and the sales amount.
  Stretch: Make each month a different color. 
*/

d3.json('../data/monthlySales.json');

/* 
  Challenge:
  Display the distance data. Show the date as text and the distance as 
  the width of each element. 
  Stretch: Format the date as "Day Month date, Year"
*/

d3.json('../data/distanceCovered.json');
