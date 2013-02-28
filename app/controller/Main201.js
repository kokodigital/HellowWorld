Ext.define('MyApp.controller.Main201', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            maincontainer: '#mainContainer'
        },
        control: {
				'button': {
					tap : 'handelNav'
				}
        }
    },
	
	handelNav: function(btn){
	
	    var myContainer = this.getMaincontainer();
		
		var currentContainer = myContainer.getActiveItem(),
			innerItems = myContainer.getInnerItems(),
			totalItems = innerItems.length,
			currentIndex = innerItems.indexOf(currentContainer),
			direction,
			newIndex;
	
		if (btn.getText() == 'Back') { 
			direction = 'right';
			newIndex = currentIndex > 0
			? (currentIndex - 1) : (totalItems - 1);
		}
		else {
				direction = 'left';
				newIndex = currentIndex < (totalItems - 1)
						? (currentIndex + 1) : 0;
		}

		myContainer.animateActiveItem(newIndex, {
		type : 'slide',
		direction : direction
		});

    }
});