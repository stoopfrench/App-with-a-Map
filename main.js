var mainVm = new Vue({

	el: "#appMap",
	data: {
		markers: [],
	
	},

	methods: {

		coordinates: function(){

			var positionX = event.pageX
			var positionY = event.pageY

			mainVm.markers.push(positionX)

			console.log(positionX)
			console.log(mainVm.markers)
			
		}
	}
})