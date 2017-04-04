
//START NAVIGATION SECTION
	// JUMP LINK SCROLL
	// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
	// WHEN USER SELECTS NAVIGATION OPTION
	// PAGE WILL SMOOTH SCROLL TO DESIRED SECTION WITH #SECTION-NAME
	// When the user clicks on the hamburger-icon

 $('.hamburger-icon').on('click', function (e) {
  e.preventDefault();

  // Use jQuery to toggle the active class on the hamburger-icon that was clicked
  $(this).toggleClass('active');
  $('#hide-nav').fadeToggle('medium');

  // $('#hide-nav').removeClass('hide-now').fadeOut('fast');

});

//END NAVIGATION SECTION



// START SMOOTH SCROLLING
$(document).ready(function() {
  $('a[href^="#"]').click(function() {
      var target = $(this.hash);
      if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
      if (target.length == 0) target = $('html');
      $('html, body').animate({ scrollTop: target.offset().top-100 }, 1000);
      return false;
  });
});

// END SMOOTH SCROLLING




//START SECTION 1: MUSIC ALBUM HIGHLIGHT
	// NO INTERACTIONS FOR THIS SECTION
//END SECTION 1: MUSIC ALBUM HIGHLIGHT




//START SECTION 2: TOUR DATES
	// MODAL WINDOW - POP-UP "SOLD OUT"
	// https://www.w3schools.com/bootstrap/bootstrap_modal.asp
	// WHEN USER SELECTS "BUY NOW" BUTTON OPTION
		// MODAL WINDOW POP-UP SLIDES ACROSS SCREEN TO CENTER-ALIGN
		// COPY DISPLAYS "SOLD OUT - PLEASE SEE OTHER TOUR DATES FOR PURCHASE"
	// WHEN USER CLOSES WINDOW, MODAL WINDOW FADES OUT SMOOTHLY
$('.modal-background').hide();

$('.open').on('click', function () {
	$('.modal-background').css("display", "flex").hide().fadeIn();
	$('.modal-content').fadeIn();
});

$('#close').on('click', function () {
	$('.modal-background').fadeOut();
	$('.modal-content').fadeOut();
});
//END SECTION 2: TOUR DATES



//START SECTION 3: LIVE PERFORMANCES
	// CAROUSEL SCRIPT
// Set variable for imageNumber and initial value should be 1
$("iframe").hide();
// NEXT SLIDE
var slideNumber = 1;
console.log(slideNumber);

$('iframe:nth-child(' + slideNumber + ')').show();

$("#next").click(function(){
    $('iframe:nth-child(' + slideNumber + ')').hide();

	// If imageNumber is equal to 4
if (slideNumber === 3) {
   slideNumber = 1;
} else {
	slideNumber += 1
} 

$('iframe:nth-child(' + slideNumber + ')').fadeIn();
});

// PREVIOUS SLIDE
$("#previous").click(function(){
   $('iframe:nth-child(' + slideNumber + ')').hide();

	// If imageNumber is equal to 4
if (slideNumber === 1) {
   slideNumber = 3;
} else {
	slideNumber -= 1
} 

$('iframe:nth-child(' + slideNumber + ')').fadeIn();
});
//END SECTION 3: LIVE PERFORMANCE


//START SECTION 4: CONNECT - SUBSCRIPTION
	// MODAL WINDOW - POP-UP "SOLD OUT"
	// https://www.w3schools.com/bootstrap/bootstrap_modal.asp
	// WHEN USER SELECTS "BUY NOW" BUTTON OPTION
		// MODAL WINDOW POP-UP SLIDES ACROSS SCREEN TO CENTER-ALIGN
		// COPY DISPLAYS "WE'LL BE KEEPING IN TOUCH - PLEASE SEE OTHER TOUR DATES FOR PURCHASE"
	// WHEN USER CLOSES WINDOW, MODAL WINDOW FADES OUT SMOOTHLY
$('.modal-background-connect').hide();

$('#submit-connect').on('click', function () {
	$('.modal-background-connect').css("display", "flex").hide().fadeIn();
	$('.modal-content-connect').fadeIn();
});

$('#connect-close').on('click', function () {
	$('.modal-background-connect').fadeOut();
	$('.modal-content-connect').fadeOut();
});
//END SECTION 4: CONNECT - SUBSCRIPTION







