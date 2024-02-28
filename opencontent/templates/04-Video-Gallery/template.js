var jplistSselector = '';

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
