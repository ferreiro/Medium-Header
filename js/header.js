
  	/****************************************
  	*** Jorge Ferreiro made this Scripts  ***
  	*** Github: github.com/jgferreiro *******
  	*** Website: jgferreiro.com   ***********
  	*** Copyright Jorge Ferreiro  ***********
  	*****************************************/
 	
	var header = $('.Header'),
	    headerContent = $('.HeaderContent');

	$(document).scroll(function(e)
	{
		headerHeight = header.height();
		opacity =  window.scrollY / header.height();
		titleOpacity = (header.height() - window.scrollY) / window.scrollY;
		titleMargin =  window.scrollY / header.height();

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
