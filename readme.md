## Answers to Questions:

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: 
### getElementById()
* Selects element by ID
* Returns only one element
* ID must be unique
* Very fast
* Example: document.getElementById("box");

### getElementsByClassName()
* Selects elements by class name
* Returns HTMLCollection (live)
* Can return multiple elements
* Updates automatically if DOM changes
* Example: document.getElementsByClassName("item");

### querySelector()
* Selects using CSS selector
* Returns first matching element
* Can select by id, class, tag, attribute etc.
* Example: document.querySelector(".item");
           document.querySelector("#box");

## querySelectorAll()
- Selects using CSS selector
- Returns NodeList (static)
- Can return multiple elements
- Does NOT auto update when DOM changes
- Example: document.querySelectorAll(".item");


## 2. How do you create and insert a new element into the DOM?
Ans: 
- To create and insert a new element
- first use createElement() to create it
- then add content or attributes
- and finally insert it into the DOM using methods like appendChild() or append().
- Example: 
const p = document.createElement("p");
p.textContent = "This is a new paragraph.";
document.body.appendChild(p);


## 3. What is Event Bubbling? And how does it work?
Ans:
- Event Bubbling is a process in JavaScript where an event starts from the target (child) element and then moves upward to its parent elements in the DOM tree.
- work: Suppose a button is inside a div.When you click the button:
First, the buttons event runs.Then, the divs event runs.Then body.Then document.The event moves upward step by step. This is called Event Bubbling.
- Example: 
- JS:
- document.getElementById("child").addEventListener("click", function() {
  console.log("Button clicked");
});

document.getElementById("parent").addEventListener("click", function() {
  console.log("Div clicked");
});



## 4. What is Event Delegation in JavaScript? Why is it useful?
Ans:
- Event Delegation in JavaScript means adding a single event listener to a parent element instead of adding it to many child elements. The parent listens for events that happen on its children.
- Example:
- Instead of adding a click event to every button inside a div, you add one click event on the div and handle clicks from its buttons.
### Why its useful: 
- only one event listener needed.
- Better performance,fewer listeners, faster execution.
- Works for dynamic elements new child elements added later will still respond.


## 5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:
- preventDefault() - Stops the browser’s default action.
- Example: Clicking a link but it doesn’t go anywhere.

- stopPropagation() - Stops the event from spreading to parent elements.
- Example: Clicking a button inside a div won’t trigger the div’s click.