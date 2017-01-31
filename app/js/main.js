
var gridItemsContainer = $('.grid-container'),
docElem = window.document.documentElement;



$(document).ready(function() {

  //json for template
  $.getJSON('js/data.json', function(data) {
     var template = document.getElementById('buttons__Grid').innerHTML;
  var html = Mustache.to_html(template, data);
  $('.grid').html(html);
  });




  });


  function loadGallery (item){
    console.log(item);
    var dummy = document.createElement ('div');
      $(dummy).addClass('placeholder');
      var offset = $(item).offset();
  //  $(dummy).addClass( 'trans-in');
// set the width/heigth and position
      dummy.style.WebkitTransform = 'translate3d(' + (offset.left - 5) + 'px, ' + (offset.top - 5) + 'px, 0px) scale3d(' + $(item).width()/gridItemsContainer.width() + ',' + $(item).height()/getViewport('y') + ',1)';


    dummy.style.transform = 'translate3d(' + (offset.left - 5) + 'px, ' + (offset.top - 5) + 'px, 0px) scale3d(' + $(item).width()/gridItemsContainer.width() + ',' + $(item).height()/getViewport('y') + ',1)';

    $('.grid-container').append(dummy);

    TweenMax.to(dummy, .5, {ease: Expo.easeInOut, scaleX:1,scaleY:1,x:0,y:0})

  }



$('body').on({
    mouseenter: function (e) {
      var block =$(this).find('.block--color');
      TweenMax.to(block, .5, {ease: Expo.easeInOut, y:286});
    },
    mouseleave: function (e) {
      var block =$(this).find('.block--color');
      TweenMax.to(block, .5, {ease: Expo.easeInOut, y:350});
    }
}, ".thumb--item");


$( "body" ).on( "click", ".thumb--item", function(e) {
  var block =$(this).find('.block--color')
  TweenMax.to(block, .5, {ease: Expo.easeInOut, y:0, onComplete:loadGallery, onCompleteParams:$(this)})
});


function getViewport( axis ) {
  var client, inner;
  if( axis === 'x' ) {
    client = docElem['clientWidth'];
    inner = window['innerWidth'];
  }
  else if( axis === 'y' ) {
    client = docElem['clientHeight'];
    inner = window['innerHeight'];
  }

  return client < inner ? inner : client;
}



/*


 function initEvents (){
 $('.thumb--item').click(function(e){
   $(this).preventDefault();
   if(isAnimating || current === pos) {
         return false;
       }
 isAnimating = true;


 })

var dummy = document.createElement ('div');
  $(dummy).addClass('placeholder');
  var offset = item.offset();
$(dummy).addClass( 'placeholder');
$(dummy).addClass( 'trans-in');
   set the width/heigth and position
  dummy.style.WebkitTransform = 'translate3d(' + (offset.left - 5) + 'px, ' + (offset.top - 5) + 'px, 0px) scale3d(' + item.width()/gridItemsContainer.width() + ',' + item.height()/getViewport('y') + ',1)';
console.log( item.offsetWidth)
dummy.style.transform = 'translate3d(' + (offset.left - 5) + 'px, ' + (offset.top - 5) + 'px, 0px) scale3d(' + item.width()/gridItemsContainer.width() + ',' + item.height()/getViewport('y') + ',1)';


;
  $('.grid-container').append(dummy);
  setTimeout(function() {

      }, 200);


}
*/
