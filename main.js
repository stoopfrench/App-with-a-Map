var mainVm = new Vue({

	el: "#appMap",
	data: {
		markers: [],
		notes: [],
		
	
	},

	methods: {

		placeMarker: function() {

			var positionX = event.pageX + 'px'
			var positionY = event.pageY + 'px'

			this.markers.push({positionX, positionY})

			
		},

		placeNote: function() {

			var positionX = event.pageX + 'px'
			var positionY = event.pageY + 'px'

			this.notes.push({positionX, positionY})

			// console.log(this.notes)

		},

		remove: function(marker) {

			var index = this.markers.indexOf(marker)

			this.markers.splice(index,1)

			// var noteIndex = this.notes.indexOf(note)

			this.notes.splice(index,1)
		},
	


	},
	
})


	


