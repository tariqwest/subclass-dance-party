$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-type');
    
    
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      1000
    );
    dancer.setPosition(dancer.top, dancer.left);
    $(dancer.$node).addClass('dancer');
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    dancer.step();

  });

$('.lineupDancerButton').on('click', function(event) {
    var top = $("body").height() / 2;
    var left = 50;
    for(var i=0; i<window.dancers.length; i++){
      window.dancers[i].setPosition(top, left);
      left += 100;
      if(window.dancers[i] instanceof makeBlinkyDancer) {
        var css = {'display': 'flex', 'align-items': 'center'};
        $(window.dancers[i]).css(css);
      }
    }
  });

var enlarge = function() {
  if($(this).hasClass('blinkyDancer')){
    $(this).css('border', '20px');
    $(this).css('border-radius', '20px');
  } else {
    $(this).toggleClass('enlarge');
  }
}

var reset = function() {
  if($(this).hasClass('blinkyDancer')){
    $(this).css('border', '10px');
    $(this).css('border-radius', '10px');
  } else {
    $(this).toggleClass('enlarge');
  }
}


$('body').on('mouseenter', '.dancer', function() {
  if($(this).hasClass('blinkyDancer')){
    $(this).css('border-width', '20px');
    $(this).css('border-radius', '18px');
  } else {
    $(this).toggleClass('enlarge');
  }
});

$('body').on('mouseleave', '.dancer', function() {
  if($(this).hasClass('blinkyDancer')){
    $(this).css('border-width', '10px');
    $(this).css('border-radius', '10px');
  } else {
    $(this).toggleClass('enlarge');
  }
});



});

