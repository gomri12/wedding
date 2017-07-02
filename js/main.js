;(function () {
	
	'use strict';

	// Initialize Firebase
	 var config = {
	    apiKey: "AIzaSyCsnRdGkhao-jOPQ1U2YMqH6LcqA903kGM",
	    authDomain: "wedding-50627.firebaseapp.com",
	    databaseURL: "https://wedding-50627.firebaseio.com",
	    storageBucket: "wedding-50627.appspot.com",
	    messagingSenderId: "229266795471"
	 };
	 firebase.initializeApp(config);


	

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
	    	}
	    }
		});

	};

	$('#confirm_btn').click(function(e){
		e.preventDefault();
		console.log("the name: " + $('#name').val() + "number:" + $('#number').val() +" iscoming: " + $('#bus').val());

    	 var firebaseRef = firebase.database().ref();

    	 firebaseRef.child($('#name').val()).set({Number:$('#number').val(),Bus:$('#bus').val()});
    	 $('#myModal').modal('show');
    	 $('#number').val("");
    	 $('#name').val("");
    	 // $('#bus').val("");
    	 // $('#bus').attr('checked',false);

    	
	});

	$("#navigation_btn, #navigation_btn_top").click(function(){
		var isiOS = (navigator.userAgent.match('iPad') || navigator.userAgent.match('iPhone') || navigator.userAgent.match('iPod'));
		var isAndroid = navigator.userAgent.match('Android');
		var isWP = navigator.userAgent.match('Windows Phone') || navigator.userAgent.match('IEMobile');

		if(isiOS){
			//console.log("IOS");
			window.location = "waze://?ll=32.81843,35.05337&navigate=yes";
			//setTimeout(function () { window.location = siteURL; }, 25);     //fall back url
			//$('body').append('<iframe style="visibility: hidden;" src="'+ appURI +'" />');

		}else if ((isAndroid) || (isWP)){
			// console.log("Android");
			window.location = "waze://?ll=32.81843,35.05337&navigate=yes";
			//setTimeout(function () { window.location = siteURL; }, 25);     //fall back url
		 	//window.location = appURI;
		}else {    // if (isOtherPlatform)
			// console.log("Windows");
			window.location = "https://www.google.co.il/maps/place/%D7%A7%D7%90%D7%9C%D7%94+%D7%90%D7%A8%D7%95%D7%A2%D7%99%D7%9D+%D7%91%D7%A2%22%D7%9E%E2%80%AD/@32.8184255,35.0555626,17z/data=!3m1!4b1!4m5!3m4!1s0x151db0b3297ba995:0xdaa976b7d52ec343!8m2!3d32.8184255!4d35.0533739!6m1!1e1?hl=iw";
		    //window.location = siteURL;
		}
	});
	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
		});
	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	
	$(function(){
		mobileMenuOutsideClick();
		parallax();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		testimonialCarousel();
		goToTop();
		loaderPage();
		counter();
		counterWayPoint();
	});


}());

function checkbox() {
	var checkbox = $('#bus');
	//console.log(checkbox.val());
	if (checkbox.val() == 'Intrested') {
		$('#bus').val('Not Intrested')
	}else{
		$('#bus').val('Intrested')
	}
}