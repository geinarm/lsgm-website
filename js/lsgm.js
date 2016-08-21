
var lsgm = (function() {

	function headerIntro() {
	}

	function showNav() {
		$("#main-navbar").animate({"top":0}, 1000);
	}

	function showTitle() {
		$(".test2").addClass("test");
	}

	function postRsvpIs() {
		var values = {};
		var fields = $( "#is-rsvp-form" ).serializeArray();
		jQuery.each( fields, function( i, field ) {
			values[field.name] = field.value;
		});
		console.log(values);

		$.ajax({
			url: "https://docs.google.com/forms/d/e/1FAIpQLSfwc3BjhjfcMEy9qTRuJZXAk9Zo74WVDtfhHvomwXP7tIWVkg/formResponse",
			data: values,
			type: "POST",
			dataType: "xml",
			statusCode: {
				0: function() {
					//Success
				}
			}
		});
	}

    function onResize() {
	    if ($(window).width() <= 1024) {
	        if (stellarActivated == true) {
	            $(window).data('plugin_stellar').destroy();
	            stellarActivated = false;
	        }
	    } else {
	        if (stellarActivated == false) {

	            $.stellar({
	               horizontalScrolling: false
	           });
	            
	            $(window).data('plugin_stellar').init();
	            stellarActivated = true;
	        }
	    }
	}

	$( document ).ready(function() {

		//Tutn of stellar on small screens
		stellarActivated = true;
		onResize()
        $(window).resize(function() {
            onResize();
        });

		//RSVP
		$("#btn-rsvp-is").click(function() {
			//postRsvpIs();
		});
		$("#btn-rsvp-us").click(function() {
			
		});

		//Interactive map toggle
		$(".google-maps .map-cover").click(function() {
			console.log("Cover click");
			$(".google-maps iframe").removeClass("scrolloff");
			$(".google-maps .map-cover").fadeOut();
		});
		$(".google-maps iframe").mouseout(function() {
			console.log("Map exit");
			$(".google-maps .map-cover").fadeIn();
		});
	});

})();
