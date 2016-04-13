// Add scrollspy to <body>
$('body').scrollspy({target: ".navbar", offset: 50}); 

// Add smooth scrolling to all links inside a navbar
$("#myNav a").on('click', function(event){

  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash (#)
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });
});

$( document ).ready(function() {
    $("#img1").backstretch("img/dog1.jpg");
    $("#img2").backstretch("img/fish.jpg");
    $("#img3").backstretch("img/turtle.jpg");
    $("#img4").backstretch("img/cat.jpg");
});