// JavaScript Document
var InGameView = {
	container: null,
	vars : {
	
	},
	init : function ()
	{
		//create container
		var cont = new createjs.Container();
		var vars = [];
		
		//add car
		vars['car'] = BouncingCar;
		vars['car'].init();
		vars['car'].container.y = 620;
		vars['car'].container.x = 410;
		cont.addChild( vars['car'].container );
		
		//gamenegine
		vars['game_engine'] = GameEngine;
		
		//add hud
		var hud = [
			{ id:'up_arrow', x: 30, y: 280 },
			{ id:'down_arrow', x: 30, y:430 },
			{ id:'left_arrow', x:630, y:430 },
			{ id:'right_arrow', x:783, y:430 }
		];
		
		//build
		vars['images'] = buildLayout( hud, cont );
		
		//create container for the seuqence
		vars['sequenceContainer'] = new createjs.Container();
		cont.addChild(vars['sequenceContainer']);
		vars['sequenceContainer'].y = 200;
		//add the container to the stage
		cont.visible = false;
		stage.addChild(cont);
		
		//vars
		InGameView.container = cont;
		InGameView.vars = vars;
	},
	transitionIn: function()
	{
		//vars
		var cont = InGameView.container;
		var vars = InGameView.vars;
		
		//visible
		cont.visible = true;
		cont.alpha = 0;
		createjs.Tween.get(cont).wait(1000).to({alpha:1} ,500);
		
		var engine = vars['game_engine'];
		//events
		vars['images']['up_arrow'].onClick = function() { engine.registerInput(0); }
		vars['images']['down_arrow'].onClick = function() { engine.registerInput(2); }
		vars['images']['left_arrow'].onClick = function() { engine.registerInput(3); }
		vars['images']['right_arrow'].onClick = function() { engine.registerInput(1); }
		//start
		engine.start();
		vars['car'].bounce();
	},
	buildSequence: function( sequence ) 
	{
		//vars
		var vars = InGameView.vars;
		var seqCont = vars['sequenceContainer'];
		//working
		var layout = [];
		var seqIds = ['seq_up', 'seq_right', 'seq_down', 'seq_left'];
		for( var i = 0; i < sequence.length; i++)
		{
			layout.push({ id: seqIds[ sequence[i] ], name: 'sequenceIcon'+i, x: (125*i), scaleX:0, scaleY:0, regX: 60, regY: 60 });
		}
		seqCont.x = (960/2) - ((125 * sequence.length)/2) + 60;
		//build
		vars['seqIcons'] = buildLayout( layout, seqCont );
		//tween in
		var j = 0;
		for( var seqIcon in vars['seqIcons']) {
			createjs.Tween.get(vars['seqIcons'][seqIcon]).wait(100*j).to({scaleX:1, scaleY:1}, 250, createjs.Ease.backOut);
			j++;
		}
		//update engine
		vars['game_engine'].vars.allowInput = true;
	},
	animateSequenceOut: function()
	{	
		//vars
		var vars = InGameView.vars;
		var seqCont = vars['sequenceContainer'];
		//tween in
		var i = 0;
		for( var seqIconName in vars['seqIcons']) {
			var seqIcon = vars['seqIcons'][seqIconName];
			createjs.Tween.get(seqIcon).wait(100*i).to({scaleX:0, scaleY:0}, 250, createjs.Ease.backIn);
			i++;
		}
		setTimeout(function(){
			seqCont.removeAllChildren();
			vars['game_engine'].createSequence();
		}, (100*i)+100);
	},
	changeSequenceItem: function( index, correct ) 
	{
		//vars
		var vars = InGameView.vars;
		var seqCont = vars['sequenceContainer'];
		var seqIconID = correct ? 'seq_correct' : 'seq_incorrect';
		
		var seqIcon = vars.seqIcons['sequenceIcon'+index];
			seqCont.removeChild(seqIcon);
		
		var correctSeq = new createjs.Bitmap(assets.getResult(seqIconID));
			correctSeq.regX = 60;
			correctSeq.regY = 60;
			correctSeq.x = 125 * index;
			seqCont.addChild(correctSeq);
		
		vars.seqIcons['sequenceIcon'+index] = correctSeq;
	}
}