// jQuery: https://www.jquerycheatsheet.com/

// ---------Notes---------
// - developed in 2006
// - jon rezik was frustrated with the issue of CROSS BROWSER JS
// - jQuery is an open-source, fast, tiny, reach feature LIBRARY
// - makes it easy to interact with html documents
// - allows users to manipulate and traverse DOM, handle events, animations
// - easy to use API, works with almost all modern browsers
// - it revolutionized the way of using JS to interact with html documents
// - download or get link from cdn (uncompressed or compressed or minified)

// ---------Selectors---------
// - $() is a jQuery selector to access an html element
// - $() is similar to the document.getElementById method
function func1() {
 // syntax: $(selector).action()
 $("#img1").fadeToggle(3000); //(time to fade in ms)
}

// ---------Basics and Effects---------
// fadeIn, fadeOut can be done individually
// hide, show, toggle animation shrinks to top left corner (not as nice)
// slideUp, slideDown, slideToggle animations do what they say (not as nice)
// stop effect stops the animation when invoked

function func2() {
 $("#div1").css( {'color':'blue', 'background':'white'});
 $("#p2").css('color', 'hotpink');
 $("#div2").hide(2000);
}

// ---------document.ready and this---------
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
  left: '100px', // element must be position relative to move
  width: '500px',
 }, 2000); // elapsed time at the end
})

// ---------DOM manipulation---------
// includes Attributes, Adding, Removing, Classes, CSS and dimensions
$('#btn3').click(function(){
 $('.list').append('<li>Appended List Item</li>');
})

$('#btn4').click(function(){
 $('.list').prepend('<li>Prepended List Item</li>');
})
$('.list li:nth-child(5)').hover(function() {
 $(this).addClass('best')
 }, function() {
 $(this).removeClass('best');
})

$('.list li:nth-child(5)').click(function() {
 $('.div3').html('<h2>Easter Egg!</h2>');
})
// ...also appendTo, prependTo, before, after, empty, detach

$('#btn3, #btn4').wrapAll('<div>');

// ---------Ajax---------
// "Asynchronous JavaScript and XML"
// The built-in XMLHttpRequest object is used to execute Ajax on webpages, allowing websites to load content onto the screen without refreshing the page, fetch JSON to get APIs, etc.
// Nodejs runtime enviroment required
// includes load, write, get post...

$('#result').load('AjaxTest.html', function( // with callback function
 responseTxt, statusTxt, xhr) { // takes in params like these
  if (statusTxt == "success") {
   alert('jQuery and Ajax can be used to check things like statusTxt. In this case, it is all good. The AjaxTest.html file was found and loaded');
  } else if (statusTxt == "error") {
   alert (`Uh Oh, Ajax statusTxt has an error: ${xhr.statusText}`);
  }
});

// getting JSON data:
$.getJSON('users.JSON', function(data) {
 $.each(data, function(i, user) {
  $('ul#users').append('<li>'+user.name+'</li>');
 });
})

// but the Ajax method is the most flexible:
$.ajax({
 method: 'GET',
 url: 'http://jsonplaceholder.typicode.com/posts', // found example online
 dataType: 'json'
}).done(function(data){
 console.log(data);
 $.map(data, function(post, i){ // pass in a descriptive params if possible
  $('#result2').append(post.title);
 })
})

// making a post request:
$('#postForm').submit(function(e) {
 e.preventDefault();
 var title = $('#title').val();
 var body = $('#body').val();
 var url = $(this).attr('action');
 $.post(url, {title:title, body:body}).done(function(data) {
  console.log('Post saved');
  console.log(data);
 })
})

})