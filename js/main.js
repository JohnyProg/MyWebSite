/*
JQUERY:
Adaptive navbar
Max-width: 768px
Need press icon to show navbar
*/
	$(function($){
	  $(function() {
	    $('.menu_icon').on('click', function() {
	      $(this).closest('.navbar')
	        .toggleClass('navbar_state_open');      
	      $('.nav').toggleClass('display_none');
	    }); //add two classes to show navbar if we click on icon
	    
	    $('.menu_links-item').on('click', function() {
	      $(this).closest('.navbar')
	        .removeClass('navbar_state_open');     
	       $('.nav').removeClass('display_none');
	    }); //remove two class to hide navbar if we click on icon

	    $(document).mouseup(function (e){ 
				var div = $("#navbar"); 
				if (!div.is(e.target) 
				    && div.has(e.target).length === 0) { 
							$('.menu_links-item').closest('.navbar')
			        .removeClass('navbar_state_open');     
			        $('.nav').removeClass('display_none');
				}
			}); //remove two class if we click not at our navbar
	  });
	});

/*
JQUERY:
Up-button
Need press button to go upstairs
*/
	$(function(){ 
		$(window).scroll(function(){ 
			if($(this).scrollTop()!=0){ 
				$('.button-up').fadeIn(); 
			} 
			else{ 
				$('.button-up').fadeOut(); 
			} 
		}); 
			$('.button-up').click(function(){ 
				$('body,html').animate({scrollTop:0},500); 
			}); 
	});

/*
JQUERY:
scroll-down button
Need press button to mone on to content
*/
	$(function() { 
		$('a[href="#content"]').click(function(event) { 
			event.preventDefault() 
			var el = $('.content'); 
			$('body,html').animate({ 
				scrollTop: $(el).offset().top 
			}, 1000); 
		}); 
	});

