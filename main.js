var mainVm = new Vue({

	el: "#appMap",
	data: {
		markers: [],
		


	
	},

	methods: {

		placeMarker: function() {

			

			var positionX = event.pageX + 'px'
			var positionY = event.pageY + 'px'

			this.markers.push({positionX, positionY})

			// this.divs.push('#marker')

			// console.log(mainVm.markers)


			// console.log(this.divs)

			// console.log(positionX,positionY)
			
			console.log('x = ' + positionX, 'y = ' + positionY)
			
		},

		hideMarker: function(marker) {

			var index = this.markers.indexOf(marker)

			this.markers.splice(index,1)


		}
	
	},
	
})


	


