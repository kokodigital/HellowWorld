// JavaScript Document
var PreloaderView = {
	container: null,
	vars : {
		
	},
	init : function ()
	{
		//create container
		var cont = new createjs.Container();
		var vars = [];
		
		var images = [];
		//create progress background
		var image = new Image();
		image.src = "assets/views/Preloader/loadBarBack.png";
		images['barBack'] = cont.addChild(new createjs.Bitmap(image));
		images['barBack'].x = (960/2) - (322/2);
		images['barBack'].y = 420;
		//create progress fill
		image = new Image();
		image.src = "assets/views/Preloader/loadBarFill.png";
		images['barFill'] = cont.addChild(new createjs.Bitmap(image));
		images['barFill'].x = (960/2) - (322/2);
		images['barFill'].y = 420;
		images['barFill'].sourceRect = new createjs.Rectangle(0, 0, 166, 24);
		//create title
		var image = new Image();
		image.src = "assets/views/Preloader/title.png";
		images['title'] = cont.addChild(new createjs.Bitmap(image));
		images['title'].x = (960/2) - (356/2) - 10;
		images['title'].y = 180;
		//save reference to images
		vars['images'] = images;
		
		//add the container to the stage
		stage.addChild(cont);
		
		//vars
		PreloaderView.container = cont;
		PreloaderView.vars = vars;
	},
	update: function(e){
		var vars = PreloaderView.vars;
		vars['images']['barFill'].sourceRect = new createjs.Rectangle(0, 0, (321*e.loaded)+1, 24);
	},
	transitionOut: function()
	{
		//vars
		var cont = PreloaderView.container;
		createjs.Tween.get(cont).to({alpha:0} ,500);
	}
}