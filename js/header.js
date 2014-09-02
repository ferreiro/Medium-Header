
  	/****************************************
  	*** Jorge Ferreiro made this Scripts  ***
  	*** Github: github.com/jgferreiro *******
  	*** Website: jgferreiro.com   ***********
  	*** Copyright Jorge Ferreiro  ***********
  	*****************************************/
 	
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
