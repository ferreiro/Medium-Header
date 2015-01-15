
  	/****************************************
  	*** Jorge Ferreiro made this Scripts  ***
  	*** Github: github.com/jgferreiro *******
  	*** Website: jgferreiro.com   ***********
  	*** Copyright Jorge Ferreiro  ***********
  	*****************************************/
 	
	var header = $('.Header'),
	    headerHeight = header.height(),
	    headerContent = $('.HeaderContent');

	$(document).scroll(function(e)
	{ 
		opacity =  window.scrollY / headerHeight;
		titleOpacity = (headerHeight - window.scrollY) / window.scrollY;
		titleMargin =  window.scrollY / headerHeight;

 		if (window.scrollY > headerHeight / 1.2) {
			opacityNum +=  0.4;
		}
 		else if (window.scrollY > headerHeight / 1.8) {
			opacityNum +=  0.2;
		}
		else if (window.scrollY > headerHeight / 3) {
			opacityNum *=  1.3;
		} 
		if(window.scrollY > 0)
		{
	 		headerContent.css('opacity', titleOpacity); 
			headerContent.css('margin-bottom', - titleMargin * 90); 
	 		headerContent.css('opacity', opacity); 
		}
	});
