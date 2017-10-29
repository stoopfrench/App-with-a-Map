var mainVm = new Vue({

	el: "#appMap",
	data: {
		
		markers: [],
		notes: [],

		isHidden: false,	
	
	},

	methods: {

		placeMarker: function() {

			var positionX = event.pageX + 'px'
			var positionY = event.pageY + 'px'

			this.markers.push({positionX, positionY})
	
		},

		placeNote: function() {

			this.isHidden = false

			var positionX = event.pageX + 10 + 'px'
			var positionY = event.pageY + 10 + 'px'

			this.notes.push({positionX, positionY})


		},

		remove: function(marker) {

			var index = this.markers.indexOf(marker)

			this.markers.splice(index,1)

			this.notes.splice(index,1)
		
		},


		clearAllMarkers: function() {

			this.markers = []
			this.notes = []
		
		},
		
		toggleAllNotes: function() {

			if(this.isHidden === true) {
			
			this.isHidden = false
			
			}

			else {

				this.isHidden = true
			}
		
		},



	},
	
})


	


