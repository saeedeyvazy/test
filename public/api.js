$(document).ready(function () {
	$(document).on('click', '#send', function () {
		const base64EncodedImage = $('#base64-img').val()
		const registrationId = '5fab5e45-c063-4a58-8a38-f501c703ffd7'
		
		var request = $.ajax({
			url: 'https://localhost:8080/api/images/selfie',
			type: 'POST',
			data: JSON.stringify({
				registrationId: registrationId,
				imageData: base64EncodedImage,
			}),
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin":"*"
			},
		})
		request.done(function (response) {
			console.log(response)
		})
		request.fail((error) => {
			console.log(error)
		})

		 var request2 = $.ajax({
			url: "https://localhost:8080/api/images/liveness-action?registrationId=" + registrationId,
			type: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin":"*"
			},
		})
		request2.done(function (response) {
			$("#liveness-action").text(response.description)
		})
		request2.fail(function (error) {
			console.log(error)
		})
	})

	

	$(document).on('click', '#liveness-image', function () {
		const base64EncodedImage = $('#base64-img').val()

		var request = $.ajax({
			url: 'https://localhost:8080/api/images/liveness-image',
			type: 'POST',
			data: JSON.stringify({
				registrationId: '5fab5e45-c063-4a58-8a38-f501c703ffd7',
				imageData: base64EncodedImage,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		})
		request.done(function (response) {
			console.log(response)
		})
		request.fail((error) => {
			console.log(error)
		})
	})

	$(document).on("click", "#get-liveness-performed", function () {
		let registrationId = "5fab5e45-c063-4a58-8a38-f501c703ffd7"
		var request = $.ajax({
			url: "https://localhost:8080/api/images/liveness-performed?registrationId=" + registrationId,
			type: 'GET',
			headers: {
				"Content-Type": "application/json",
			},
		})
		request.done(function (response) {
			console.log(response.url)
		})
		request.fail(function (error) {
			console.log(error)
		})
	})

})
