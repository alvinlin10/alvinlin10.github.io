
//START NAVIGATION SECTION
	// JUMP LINK SCROLL
	// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
	// WHEN USER SELECTS NAVIGATION OPTION
	// PAGE WILL SMOOTH SCROLL TO DESIRED SECTION WITH #SECTION-NAME
//END NAVIGATION SECTION





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
	// https://www.w3schools.com/bootstrap/bootstrap_carousel.asp
	
	// Set variable for imageNumber and initial value should be 1

	// When the user clicks the next button
		// If imageNumber is equal to 4
			// Set imageNumber to 1
	// Else
		// Add one to imageNumber
		// $('img:nth-child(' + imageNumber + ')')

	// Use :nth-child to fade in current image


// // Set variable for imageNumber and initial value should be 1
//$("img").hide();
// When the user clicks the next button
	// Hide all images
//var slideNumber = 1;
//console.log(slideNumber);

//$('img:nth-child(' + slideNumber + ')').show();


//$("#next").click(function(){
    //$('img:nth-child(' + slideNumber + ')').hide();


	// If imageNumber is equal to 4
//if (slideNumber === 4) {
   //slideNumber = 1;
//} else {
	//slideNumber += 1
//} 

//$('img:nth-child(' + slideNumber + ')').fadeIn();

//});

// Previous

//$("#previous").click(function(){
    //$('img:nth-child(' + slideNumber + ')').hide();


	// If imageNumber is equal to 4
//if (slideNumber === 1) {
   //slideNumber = 4;
//} else {
	//slideNumber -= 1
//} 

//$('img:nth-child(' + slideNumber + ')').fadeIn();

//});

		// Set imageNumber to 1


	// Else

		// Add one to imageNumber

	// Use :nth-child to fade in current image

//END SECTION 3: LIVE PERFORMANCE











