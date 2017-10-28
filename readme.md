An App With A Map

Part I
--------
- Create an HTML page that displays a large map that fits the entire page. (You may use the provided Colorado Topo Map or use your own.)
- When the user clicks on the map, create a new DOM element and position it where they clicked. You can render a styled div or an image for the marker element.
You can access the mouse coordinates with the pageX and pageY properties of the event object.
You can position the marker by setting it to position: absolute, its container to position: relative, and its left and top css properties to a calculated value based on the mouse coordinate.

Part II
--------
When the user clicks on a marker, remove the marker element from the DOM.

Bonus I
--------
Add functionality to allow notes to be saved with each marker.

- When the user adds a marker, prompt them to enter a note that will be saved with the marker. Show a styled div with a textarea as a popup for the user to enter a note.
- When the user hovers over a marker, display the note in a read-only popup next to the marker.


Bonus II
---------
You may have noticed that your markers shift out of place as the page resizes. Maybe units other than pixels might help make your map responsive.


Tips:

If you're using vue, think about your data first. You'll probably need an array of objects to keep track of all of your markers. These objects will need X and Y coordinates. They'll also need a notes property if you're doing the bonus section. 

In order to render the markers on the page, it'll probably be easiest to use `v-for` and `v-bind:style` to dynamically position all of the elements. 