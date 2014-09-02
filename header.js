
	var target = $('.HeaderBlurImage');
	var text = $('.HeaderText');
	var targetHeight = target.outerHeight();
 
	$(document).scroll(function(e){
	    
		var scrollPercent;
		var middle_div = target.height() / 2;

		if ((window.scrollY > 0) && (window.scrollY < target.height() )) {

			if (window.scrollY > middle_div) {
				scrollPercent =  window.scrollY / target.height();
				scrollPercent += 0.1; // Increase more the percent
			    target.css('opacity', scrollPercent); 
			    // target+'img'.css('margin-top', - scrollPercent * 10); 
			    text.css('margin-top', scrollPercent * 60); 
			    text.css('opacity', scrollPercent); 
			}
			else if(window.scrollY >= 0){
		    	scrollPercent =  window.scrollY / target.height();
		        target.css('opacity', scrollPercent); 
			    text.css('margin-top', scrollPercent * 60); 
			    text.css('opacity', 1); 
	 	    };


		};
	});



	