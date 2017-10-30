var mainVm = new Vue({

	el: "#appMap",
	data: {
		
		markers: [],
		inputs: [],

		isHidden: false,
		coordinates: "",
	
	},

	methods: {


		showCoordinates: function() {

			var currentX = event.pageX
			var currentY = event.pageY

			$('#coordinates').text(currentX + ' (x) , ' + currentY + ' (y)')
		},

		placeMarker: function() {

			var positionX = event.pageX + 'px'
			var positionY = event.pageY + 'px'


			this.markers.push({positionX, positionY})
	
		},

		placeInput: function() {

			// this.isHidden = false

			var positionX = event.pageX + 10 + 'px'
			var positionY = event.pageY + 10 + 'px'


			this.inputs.push({positionX, positionY})


		},


		hideInput: function(input) {

			// this.isHidden = true 


		},


		remove: function(marker) {

			var index = this.markers.indexOf(marker)

			this.markers.splice(index,1)

			this.inputs.splice(index,1)
	
		
		},


		clearAllMarkers: function() {

			this.markers = []
			this.inputs = []

		
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


	


