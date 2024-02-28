var jplistSselector = '';

$('document').ready(function(){

	//initiate jplist
	var $list = $(jplistSselector);
	   $list.jplist({				
		  itemsBox: '.items' 
		  ,itemPath: '.item' 
		  ,panelPath: '.jplist-panel'
			,deepLinking: true
			,redrawCallback: function(){
				console.log("redraw");
				//this code occurs on every jplist action
				getItems(jplistSselector);
			}
	  });
   
	// Add type link support, find link and add a click event
	filterLinks($list, "type", true);

	// Add category link support, find link and add a click event
   
	filterLinks($list, "category", true);
     
   
});

getItems(jplistSselector);


function getItems(selector){
	
	var i = $(selector + " .item").length;
	
		$(selector + ' .item-count').addClass('filtered').text(i);
	
	}
	
	// Add support for custom deeplinks
	
	function filterLinks($list, name, resetAll){
		var active = 'active';
		var prepend = name + "-";
		var linkSel = "." + name + "-link";
		
		
		   // Add link support, find link and add a click event
			$list.find(linkSel).click(function(e){
				
				// Get the data-id
				var id= $(this).data('id'); 
				
				var dataType = prepend + id;
		
				// The target input item
				var $input = $("input[data-path='" + dataType + "']");
				
				// If reset, go over all links and reset them to 0
				if(resetAll){
					
					$wrapper = $('[data-id="' + name + '-filter"]');
					$wrapper.find("input").prop('checked', false).parent().removeClass(active);
					
				}
				

				e.preventDefault(); 

				$input.click().parent().addClass(active);
				
				return false;
		}); 
	}
