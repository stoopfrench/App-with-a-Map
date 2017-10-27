var mainVm = new Vue({

	el: "#appMap",
	data: {
		markers: [],


	
	},

	methods: {

		coordinates: function() {

			var positionX = event.pageX
			var positionY = event.pageY

			mainVm.markers.push({positionX, positionY})

			// console.log(positionX,positionY)
			
			console.log(mainVm.markers)
			console.log(mainVm.markers.positionY)
			
		}
	}
})