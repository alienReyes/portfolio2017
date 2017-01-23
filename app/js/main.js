$(document).ready(function() {
  $.getJSON('js/data.json', function(data) {
     var template = document.getElementById('buttons__Grid').innerHTML;
  var html = Mustache.to_html(template, data);
  $('.grid').html(html);
  });
  });

  var speed =250,
    easing = mina.easeinout;

$('body').on('click', 'figure', function(e) {
})



function animateHeader () {
  	var s = Snap( '#decoration');
     path = s.select( 'path' );
    pathConfig = {
      from : path.attr( 'd' ),
      to : "M1366,103L0,195V0h1366V103z"
    };
    	path.animate( { 'path' : pathConfig.to }, speed, easing );

}

	// function init() {
  //
  //
	// 	[].slice.call ( document.querySelectorAll( '#grid > a' ) ).forEach( function( el ) {
	// 		var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
	// 			pathConfig = {
	// 				from : path.attr( 'd' ),
	// 				to : "M1366,203L0,195V0h1366V303z"
	// 			};
  //
	// 		el.addEventListener( 'mouseenter', function() {
	// 			path.animate( { 'path' : pathConfig.to }, speed, easing );
	// 		} );
  //
	// 		el.addEventListener( 'mouseleave', function() {
	// 			path.animate( { 'path' : pathConfig.from }, speed, easing );
	// 		} );
	// 	} );
	// }
