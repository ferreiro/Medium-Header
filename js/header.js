
	var header = $('.Header'),
		opacityNum = 0;

	$(document).scroll(function(e)
	{
		headerHeight = $('.Header').height();
		opacityNum =  window.scrollY / header.height();
		opacityTitle = (header.height() - window.scrollY) / window.scrollY;
		title_margin =  window.scrollY / header.height();

 		if (window.scrollY > headerHeight / 1.2) {
			opacityNum =  opacityNum + 0.4;
		}
 		else if (window.scrollY > headerHeight / 1.8) {
			opacityNum =  opacityNum + 0.2;
		}
		else if (window.scrollY > headerHeight / 3) {
			opacityNum =  opacityNum * 1.3;
		} 
		if(window.scrollY > 0)
		{
	 		$('.HeaderContent').css('opacity', opacityTitle); 
			$('.HeaderContent').css('margin-bottom', - title_margin * 90); 
	 		$('.HeaderBlurImage').css('opacity', opacityNum); 
		}
	});

	// var target = $('.HeaderBlurImage');
	// var text = $('.HeaderText');
	// var targetHeight = target.outerHeight();
 
	// $(document).scroll(function(e){
	    
	// 	var scrollPercent;
	// 	var middle_div = target.height() / 2;

	// 	if ((window.scrollY > 0) && (window.scrollY < target.height() )) {

	// 		if (window.scrollY > middle_div) {
	// 			scrollPercent =  window.scrollY / target.height();
	// 			scrollPercent += 0.1; // Increase more the percent
	// 		    target.css('opacity', scrollPercent); 
	// 		    // target+'img'.css('margin-top', - scrollPercent * 10); 
	// 		    text.css('margin-top', scrollPercent * 60); 
	// 		    text.css('opacity', scrollPercent); 
	// 		}
	// 		else if(window.scrollY >= 0){
	// 	    	scrollPercent =  window.scrollY / target.height();
	// 	        target.css('opacity', scrollPercent * 2); 
	// 		    text.css('margin-top', scrollPercent * 60); 
	// 		    text.css('opacity', 1); 
	//  	    };


	// 	};
	// });






	







	