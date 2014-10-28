( function ( scope ) {

	var beep = new Audio( 'beep.ogg' ),
		tick = new Audio( 'tick.ogg' );

	scope.Timer = {
		start: function ( model ) {
			var setDuration = model.count * model.interval + model.setDelay;
			for ( var s = 0; s < model.sets; s ++ ) {
				for ( var c = 0; c < model.count; c ++ ) {
					var last  = ( model.count - c ) <= 1,
						sound =  last ? beep : tick;
					setTimeout( sound.play.bind( sound ), ( model.interval * c + ( s * setDuration ) ) * 1000 );
				}
			}
		}
	}

} )( window );
