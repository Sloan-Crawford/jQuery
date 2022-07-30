# jQuery mini-project

A web application to practice and demonstrate the uses and benefits of jQuery.

- jQuery is a write less and do more javascript library.
- It helps us to make the use of javascript much easier.
- It simplifies the complicated things from javascript like the AJAX calls and the DOM manipulation.

## Features

1. Effects and animations.
2. DOM element selections functions.
3. Extensibility.
4. Events.
5. CSS manipulation.
6. DOM traversal and modification.
7. Ajax.

## Example

```English
$("document").ready(function() {
// selecting nested html elements and manipulating using (this):
$(".list > li").hover(function() {
$(this).css({'font-style':'italic', 'border':'1px solid white'})
}, function() { // second function runs when no longer hovering
$(this).css({'font-style':'normal', 'border':'1px solid tomato'})
})

// ---------click event with anonymous function---------
$(".list li").click(function() {
$(this).hide(1000);
})

$("li:odd").mouseenter(function() {
$(this).css({'color':'magenta', 'background':'white'})
})

$("li:odd").mouseleave(function() {
$(this).css({'color':'white', 'background':'tomato'})
})

// animate effect:
$('#img1').click(function() {
$(this).animate({
opacity: '1',
left: '200px', //not working
width: '500px',
}, 2000);
})
})
```

## More projects by Sloan Crawford:

## [Portfolio](https://sloan-crawford-professional-portfolio.netlify.app/)
