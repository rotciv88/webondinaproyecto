 
//smoth scroll //
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 50000);
    return false;
});


 /* function smoothScroll(target,duration){
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect();
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  console.log(targetPosition)
 
  function animationScroll(currentTime){
    if(startTime === null ) currentTime = currentTime;
    var timeElapsed = currentTime -startTime;
    var run = ease(timeElapsed,startPosition,distance,duration);
    window.scrollTo(0,run);
    if(timeElapsed < duration) requestAnimationFrame(animation);
    console.log('timeElapsed : ' + timeElapsed + 'duration: ' + duration);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var parte1 = document.querySelector('.parte1');
var section2 = document.querySelector('.section2');

parte1.addEventListener('click',function(){
  smoothScroll('.parte1', 1000);
});

section2.addEventListener('click',function(){
  smoothScroll('.section1', 1000);
});

 /* $(function(){

  	$('a[href^="#"]').click(function(e){

  		var target = $(this).attr('href');
  		var strip = target.slice(1);
  		var anchor = $("a[name'" + strip +"']");

		e.preventDefault();

		$('html, body').animate({

			scrollTop: anchor.offset().top

		},'slow');

		});

  	});
  });
  */

/*$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
*/