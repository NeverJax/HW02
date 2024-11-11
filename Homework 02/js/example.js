var listItems = document.getElementsByTagName('li');  

var heading = document.querySelector('h2');                        
var headingText = heading.firstChild.nodeValue;                    
var totalItems = listItems.length;                                 
var newHeading =  headingText + '<span>' + totalItems + '</span>'; 


/*  WRITE YOUR CODE BELOW */


// Part1. Hint: Use the listItems object to iterate through the elements of the list
for (var i = 0; i < listItems.length; i++) {
    var itemText = listItems[i].textContent.toLowerCase(); 
    if (itemText === 'fresh figs' || itemText === 'kale' || itemText === 'honey') {
      listItems[i].className = 'cool';  
    }
  }

// Part2. Hint: Use the heading and newHeading to show the number of items in the shopping list

heading.innerHTML = newHeading;



