
  	/****************************************
  	*** Jorge Ferreiro made this Scripts  ***
  	*** Github: github.com/jgferreiro *******
  	*** Website: jgferreiro.com   ***********
  	*** Copyright Jorge Ferreiro  ***********
  	*****************************************/
 	
	var header = $('.Header'), 
		headerBlur = $('.HeaderBlurImage'), 
		headerContent = $('.HeaderContent');

	$(document).scroll(function(e)
	{ 
		opacity =  window.scrollY / header.height();
		titleOpacity = (header.height() - window.scrollY) / window.scrollY;
		titleMargin =  window.scrollY / header.height();

		if (window.scrollY < header.height()) {
			
	 		if (window.scrollY > header.height() / 1.2) 
				opacity += 0.4;
	 		else if (window.scrollY > header.height() / 1.8)
				opacity += 0.2; 
			else if (window.scrollY > header.height() / 3) 
				opacity *= 1.3;

			if (window.scrollY > 0) {
		 		headerContent.css('opacity', titleOpacity); 
				headerContent.css('margin-bottom', - titleMargin * 90); 
		 		headerBlur.css('opacity', opacity); 
			}
		}  
 		
	});
