
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

	$( document ).ready(function() {
		//$("#text-carousel-intro-section").hide()
		//$("#text-carousel-intro-section").fadeIn(2000, showTitle);
		//$(".back-drop").delay(2000).fadeOut(3000);
		//$("#text-carousel-intro-section .caption").hide();
		//$("#text-carousel-intro-section .caption").delay(200).slideDown(1500);

		//$(".title .group-1").delay(500).fadeIn({ duration: 1500, queue: false });
		//$(".title .group-1").stop(true,true).delay(500).animate({ top: "-=100px",}, { duration: 1000, queue: false });

		//$(".title .group-2").stop(true, true).delay(1500).fadeIn({ duration: 1000, queue: false });
		//$(".title .group-2").animate({ top: "-=100px",}, 1500);

		//RSVP
		$("#btn-rsvp-is").click(function() {
			//postRsvpIs();
		});
		$("#btn-rsvp-us").click(function() {
			
		});

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
