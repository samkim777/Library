Here is a list of problems that I ran into and how I've addressed them. This is for my own educational purposes,
so I can refer to them should I run into similar problems in other projects.

This file was initialized about 2/3 of the way through the project, so it doesn't fully capture all the debugs.



-----------------------------------------------------------------------------------------------------------------------
1. 'textContent overriding delete button'
-> An issue while displaying books after adding them to the library was that changing the textContent of a div, then appending a button to its child somehow made the button disappear from the previous div. For example, when the second book was created,the button would display within the second div and disappear from the first div. 
Soln: This was a conceptual mistake by thinking that the displaying of books should be done through for loops. By running a for-loop, my textContent would run the number of books that was in the library, thereby overridng exisitng buttons. This was fixed by getting rid of the for loop.


2. 'Delete button onclick deletes the wrong divs'
 -> 