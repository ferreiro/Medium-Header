
  	/****************************************
  	*** Jorge Ferreiro made this Scripts  ***
  	*** Github: github.com/ferreiro *********
  	*** Website: jgferreiro.com   ***********
  	*** Copyright Jorge Ferreiro  ***********
  	*****************************************/
 	
	var header = $('.Header'), 
	    headerBlur = $('.HeaderBlurImage'), 
	    headerTitle = $('.HeaderContent');
	
	// This function is execute every time the user makes an scroll.
	// It calculates the opacity and margin bottom for header's title and full screen image. 
	// And also, sets those properties for the corresponding elements.
	
	$(document).scroll(function(e)
	{ 
		// Only executes the following code if the header is visible for the user.
		// when the user scrolls down and the header is not visile, we avoid make all the operations.

		if (window.scrollY < header.height()) {

			opacity =  window.scrollY / header.height(); 			     // Autocalculate opacity depending on scroll and header height 
			titleOpacity = (header.height() - window.scrollY) / window.scrollY;  // Title opacity depends on user's scroll and header height
			titleMargin =  window.scrollY / header.height();		     // Bottom margin depeds on scroll and header's height
			
	 		if (window.scrollY > header.height() / 1.2) 
				opacity += 0.4; // increase acc. opacity in 0.4.
	 		else if (window.scrollY > header.height() / 1.8)
				opacity += 0.2; // increase acc. opacity in 0.2
			else if (window.scrollY > header.height() / 3) 
				opacity *= 1.3; // increase acc. opacity by 1.3.
			
			if (window.scrollY > 0) {
		 		headerBlur.css('opacity', opacity); 	     // Setting blurred image opacity.
				headerTitle.css({
					'opacity': titleOpacity,	     // sets opacity for the tilte
					'margin-bottom': - titleMargin * 90  // decreases the margin bottom by 90.
				});
			}
		}  
 		
	});
