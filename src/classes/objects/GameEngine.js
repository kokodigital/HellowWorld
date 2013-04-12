var GameEngine = {
	vars : {
		sequence: [],
		level: 0,
		bouncemeter: 0,
		sequenceIndex: 0,
		sequenceLength: 0,
		time: 0,
		//0-idle,1-playing
		state: 0,
		allowInput: false,
		targetPerctanage: 0.1
	},
	start: function()
	{
		var vars = GameEngine.vars;
		
		vars.state = 1;
		vars.level = 0;
		vars.sequenceIndex = 0;
		vars.allowInput = false;
		
		GameEngine.createSequence();
	},
	createSequence: function() 
	{
		var vars = GameEngine.vars;
		var sequence = [];
		var difficulty = [3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8][vars.level];
		//up right down left
		var sequenceItems = [0, 1, 2, 3];
		//crate sequence
		for( var i = 0; i < difficulty; i++)
		{
			sequence.push( sequenceItems[ Math.floor(Math.random()*4) ] );
		}
		vars.sequenceLength = difficulty;
		vars.sequence = sequence;
		vars.sequenceIndex = 0;
		//build it
		views['ingame'].buildSequence( vars.sequence );
	},
	registerInput: function( value )
	{
		var vars = GameEngine.vars;
		//if allowed
		if( vars.allowInput )
		{
			createjs.Sound.play("click");
			//if the correct input is passed
			if( vars.sequence[ vars.sequenceIndex ] == value ){
				views['ingame'].changeSequenceItem( vars.sequenceIndex, true );
				vars.sequenceIndex += 1;
				//if sequence is complete
				if( vars.sequenceIndex == vars.sequenceLength) 
				{
					vars.level += 1;
					
					vars.targetPerctanage += 0.1;
					
					vars.allowInput = false;
					views['ingame'].animateSequenceOut();
				}
			}else{
				views['ingame'].changeSequenceItem( vars.sequenceIndex, false );
				
				if(vars.level != 0) vars.level -= 1;
				vars.targetPerctanage -= 0.1;
				
				vars.allowInput = false;
				views['ingame'].animateSequenceOut();
			}	
		}
	}
}