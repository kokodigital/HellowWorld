var BouncingCar = {
	container: null,
	vars : {},
	init : function ()
	{
		//create container
		var cont = new createjs.Container();
		var vars = {};
		
		//layout
		var layout = [
			
			{ id: 'car_windshield', y:-307, x:-133 },
			{ id: 'car_grape', x:-100, y:-265 },
			{ id: 'car_blackberry', x:-42, y:-272 },
			{ id: 'car_raspberry', x:-8, y:-281},
			
			{ id: 'car_wheel', name: 'leftwheel', x: -132, y:-139, scaleX: -1, regX:23, regY: 45.5 },
			{ id: 'car_wheel', name: 'rightwheel', x: 128, y:-139, regX:23, regY: 45.5 },
			
			{ id: 'car_hood', y:-240, x:-165 },
			{ id: 'car_windshield_tint', y:-296, x:-119 },
			{ id: 'car_front', y:-162, x:-173 }
			
		];
		
		//build
		vars['images'] = buildLayout( layout, cont );
		vars['perc'] = 0;
		vars['rotationDirection'] = 10;
		
		//vars 
		BouncingCar.container = cont;
		BouncingCar.vars = vars;
		
	},
	bounce: function(){
		var time = 400;

		createjs.Tween.get(BouncingCar.vars)
		 .to({rotationDirection: BouncingCar.chooseRandomRotation()})
         .to({perc:BouncingCar.chooseRandomPercentage()}, time, createjs.Ease.quadOut)
		 .to({perc:0}, time, createjs.Ease.quadIn)
         .addEventListener("change", BouncingCar.update);
		 
		 setTimeout(function(){
							 BouncingCar.bounce();
							 }, time*2);
		 
	},
	chooseRandomRotation: function(){
		return [-10,-5,0,5,10][Math.floor(Math.random()*5)];	
	},
	chooseRandomPercentage: function(){
		return GameEngine.vars.targetPerctanage;
		//[.3, .4, .5, .6, .7, .8 ][Math.floor(Math.random()*6)];	
	},
	update: function(){
		
		var cont = BouncingCar.container;
		var vars = BouncingCar.vars;
		
		
		var perc = vars['perc'];
		
		//_carElementVector.push(new CarElement(_car.car_mc.grill_mc, -162, -353, 1, 1));
		vars['images']['car_front'].y = -162 - (191 * perc);
		//_carElementVector.push(new CarElement(_car.car_mc.hood_mc, -240, -267, 1, -1.05));
		vars['images']['car_hood'].y = -240 - (27 * perc);
		vars['images']['car_hood'].scaleY = 1 - (2.05 * perc);
		vars['images']['car_hood'].visible = vars['images']['car_hood'].scaleY >= 0;
		//_carElementVector.push(new CarElement(_car.car_mc.canopy_mc, -307, -327, 1, 1));
		vars['images']['car_windshield'].y = -307 - (20 * perc);
		//_carElementVector.push(new CarElement(_car.car_mc.tint_mc, -296, -318, 1, .95));
		vars['images']['car_windshield_tint'].y = -296 - (26 * perc);
		vars['images']['car_windshield_tint'].scaleY = 1 - (0.05 * perc);
		//_carElementVector.push(new CarElement(_car.car_mc.fruitBlueberry_mc, -272, -352, 1, 1, 0, -20));
		vars['images']['car_blackberry'].y = -272 - (60 * perc);
		vars['images']['car_blackberry'].rotation = 0 - (20 * perc);
		//_carElementVector.push(new CarElement(_car.car_mc.fruitGrape_mc, -265, -334, 1, 1,0, 20));
		vars['images']['car_grape'].y = -265 - (69 * perc);
		vars['images']['car_grape'].rotation = 0 + (20 * perc);
		//_carElementVector.push(new CarElement(_car.car_mc.fruitRaspberry_mc, -265, -334, 1, 1, 0, -20));
		vars['images']['car_raspberry'].y = -265 - (45 * perc);
		vars['images']['car_raspberry'].rotation = 0 - (20 * perc);
		//_carElementVector.push(new CarElement(_car.car_mc.rwr_mc, -168, -168, 1, .5));
		//_carElementVector.push(new CarElement(_car.car_mc.rwl_mc, -168, -168, 1, .5));
		
		//_carElementVector.push(new CarElement(_car.car_mc.fwr_mc, -130, -220, 1, 1, 0, 15));
		vars['images']['rightwheel'].y = -130 - (90 * perc);
		vars['images']['rightwheel'].rotation = 0 + (15 * perc);
		//_carElementVector.push(new CarElement(_car.car_mc.fwl_mc, -130, -220, 1, 1, 0, -15));
		vars['images']['leftwheel'].y = -130 - (90 * perc);
		vars['images']['leftwheel'].rotation = 0 - (15 * perc);
		
		cont.rotation = 0 + (vars['rotationDirection'] * perc);
	}
}