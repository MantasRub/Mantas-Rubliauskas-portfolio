'use strict';

// get the size of multiplication table (e.g. to get 10x10 table user must enter 10)
var size = parseInt(window.prompt("Size of multiplication table?"));

// define empty table array
var table = [];

// table will consist of rows and columns
var line, column;

// add lines
for (line = 1; line <= size; line++)
{
    // create new array of columns for each line
    table[line] = [];

    // add columns
    for (column = 1; column <= size; column++)
    {
        // store the result of multiplication inside table
        table[line][column] = line * column;
    }
}

// open table
document.write("<table>");

// add lines
for(line = 1; line <= size; line++)
{
    // begin line
    document.write("<tr>");

    // add columns
    for(column = 1; column <= size; column++)
    {
        // check if both numbers are the same. If yes - make this cell to standout.
        if(line == column)
        {
            document.write("<td class='same-number'>" + table[line][column] + "</td>");
        }
        else
        {
            document.write("<td>" + table[line][column] + "</td>");
        }
    }

    // end line
    document.write("</tr>");
}

// close table
document.write("</table>");