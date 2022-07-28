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
// - fadeToggle is defined in the jQuery library (time to fade in ms)

function func1() {
 // syntax: $(selector).action()
 $("#img1").fadeToggle(3000);
}

function func2() {
 $("#div1").css( {'color':'blue', 'background':'white'});
 $("#p2").css('color', 'hotpink');
 $("#div2").hide(2000);
}

// selecting muliple html elements and manipulating using (this):
$("li").hover(function() {
 $(this).css({'font-style':'italic', 'border':'1px solid white'})
}, function() {
 $(this).css({'font-style':'normal', 'border':'none'})
})