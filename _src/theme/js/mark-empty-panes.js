// --
// Make sure a wrapper with only empty panes in it does not show when not in DNN Edit mode
// --

const markEmptyPaneRows = function (wrapper, children, clsEmpty, className){
	
	var wrappers = document.querySelectorAll(wrapper);

	wrappers.forEach(item => {

		var childrenCount = item.querySelectorAll(children).length;
		var emptyChildrenCount = item.querySelectorAll(children+clsEmpty).length;
		if(childrenCount == emptyChildrenCount){

			item.classList.add(className)

		}
	});


}

markEmptyPaneRows(".panes", ".pane", ".DNNEmptyPane", "panes-empty");