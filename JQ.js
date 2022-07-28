// jQuery: https://www.jquerycheatsheet.com/

// - developed in 2006
// - jon rezik was frustrated with the issue of CROSS BROWSER JS
// - jQuery is an open-source, fast, tiny, reach feature LIBRARY
// - makes it easy to interact with html documents
// - allows users to manipulate and traverse DOM, handle events, animations
// - easy to use API, works with almost all modern browsers
// - it revolutionized the way of using JS to interact with html documents
// - download or get link from cdn (uncompressed or compressed or minified)

// - $ is a jQuery selector to access an html element
// - $ is similar to the document.getElementById method
function func1() {
 // syntax: $(selector).action()
 $("#img1").fadeToggle(3000); //(time to fade in ms)
}

// fadeIn, fadeOut can be done individually
// hide, show, toggle animation shrinks to top left corner (not as nice)
// slideUp, slideDown, slideToggle animations do what they say (not as nice)
// stop effect stops the animation when invoked

function func2() {
 $("#div1").css( {'color':'blue', 'background':'white'});
 $("#p2").css('color', 'hotpink');
 $("#div2").hide(2000);
}

// document.ready is called after the html document is fully loaded
// window.onload is similar in vanilla js...
// but document.ready will fire first, when all elements are found, not completely loaded 
// (only use window.onload when manipulating dimensions of images loaded from some url)
// wrap all jquery in this document.ready event:
$("document").ready(function() {
// selecting nested html elements and manipulating using (this):
 $(".list > li").hover(function() {
  $(this).css({'font-style':'italic', 'border':'1px solid white'})
 }, function() { // second function runs when no longer hovering
  $(this).css({'font-style':'normal', 'border':'1px solid tomato'})
 })

 // click event with anonymous function:
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

