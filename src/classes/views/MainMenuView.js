// JavaScript Document
var MainMenuView = {
	container: null,
	vars : {},
	init : function ()
	{
		//create container
		var cont = new createjs.Container();
		var vars = {};
		
		//layout
		var layout = [
			{ id: 'bounce_logo', x: 212.5, y: 30 },	
			{ id: 'vimto_logo', x: -50, y: -30 },
			{ id: 'navigation_post', x: 735, y: 460 },
			{ id: 'play_game_button', x: 576, y: 341 },
			{ id: 'highscore_button', x: 609, y: 500 },
			{ id: 'mainmenu_car', x: 95, y: 255 }
		];
		
		//build
		vars['images'] = buildLayout( layout, cont );
		
		//add to stage
		cont.visible = false;
		stage.addChild(cont);
		
		//vars 
		MainMenuView.container = cont;
		MainMenuView.vars = vars;
	},
	transitionIn: function()
	{
		//vars
		var cont = MainMenuView.container;
		var vars = MainMenuView.vars;
		
		//visible
		cont.visible = true;
		cont.alpha = 0;
		createjs.Tween.get(cont).wait(1000).to({alpha:1} ,500);
		
		//tween example
		var bounceLogo = vars['images']['bounce_logo'];
		createjs.Tween.get(bounceLogo).to({y:-500}).wait(1000).to({y:30},1000,createjs.Ease.bounceOut)
		
		//event example
		vars['images']['play_game_button'].onClick = function()
		{ 
			//go to in game
			views['mainmenu'].transitionOut();
			views['background'].changeBackground('ingame_background');
			views['ingame'].transitionIn();
			//null off the onclick so that it removes the event listener (for performance and to stop people spamming buttons);
			vars['images']['play_game_button'].onClick = null;
			
			createjs.Sound.play("click");
		}
		
		vars['images']['highscore_button'].onClick = function()
		{ 
			createjs.Sound.play("click");
		}
	},
	transitionOut: function()
	{
		//vars
		var cont = MainMenuView.container;
		createjs.Tween.get(cont).to({alpha:0} ,500);
	}
}