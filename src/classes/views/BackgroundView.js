// JavaScript Document
var BackgroundView = {
	container: null,
	vars : {
		
	},
	init : function ()
	{
		//create container
		var cont = new createjs.Container();
		var vars = [];
		
		var images = [];
		//create preloader background
		var image = new Image();
		image.src = "assets/views/Background/preloader.jpg";
		images['preloader'] = cont.addChild(new createjs.Bitmap(image));
		//save image referecnces
		vars['images'] = images;
		vars['active'] = 'preloader';
		
		//add the container to the stage
		stage.addChild(cont);
		
		//vars
		BackgroundView.container = cont;
		BackgroundView.vars = vars;
	},
	preloadComplete: function()
	{
		//vars
		var cont = BackgroundView.container;
		var vars = BackgroundView.vars;
		//layout
		var layout = [
			{ id: 'ingame_background', x: 0, y:0, visible:false },	
			{ id: 'standard_background', x: 0, y:0, visible:false }
		];
		
		//build
		var images = buildLayout( layout, cont );
		images['preloader'] = vars['images']['preloader'];
		vars['images'] = images;
	},
	changeBackground: function( to ) 
	{
		//vars
		var cont = BackgroundView.container;
		var vars = BackgroundView.vars;
		//fade out the old one and fade in new one at same time?
		createjs.Tween.get(vars['images'][ vars['active'] ]).to({alpha:0, visible:false}, 500);
		createjs.Tween.get(vars['images'][ to ]).to({alpha:0, visible:true}).to({alpha:1}, 500);
		//update
		vars['active'] = to;
	}
}