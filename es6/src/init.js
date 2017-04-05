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
    var topHeight = $('h1').height() + $('.topbar').height();
    var dancer = new dancerMakerFunction(
      Math.random() * ($('body').height() - topHeight) + topHeight,
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
        //window.dancers[i].setPosition(top, left);
        window.dancers[i].lineUp(top, left);
        left += 100;
      }
    });

  $('.pairDancerButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length - 1; i+=2) {
      var topHeight = $('h1').height() + $('.topbar').height();
      var randomTop = Math.random() * ($('body').height() - topHeight) + topHeight;
      var randomLeft = Math.random() * $('body').width();
      window.dancers[i].setPosition(randomTop, randomLeft);
      window.dancers[i + 1].setPosition(randomTop + 30, randomLeft + 30);
    }
    if (window.dancers.length % 2 === 1) {
      var $unpaired = window.dancers[window.dancers.length - 1].$node;
      var $xPath = $('<div class="unpaired-x"></div>');
      var $yPath = $('<div class="unpaired-y"></div>');
      $($yPath).append($unpaired);
      $($xPath).append($yPath);
      $('body').append($xPath);

      dancerSound = new Audio($($unpaired).data('sound') + '.wav');

      dancerSound.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
      }, false);

      dancerSound.play();
      } 
  });


  var dancerSound;

  $('body').on('mouseenter', '.dancer', function() {
    $(this).toggleClass('enlarge');

    dancerSound = new Audio($(this).data('sound') + '.wav');

    dancerSound.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);

    dancerSound.play();
  });

  $('body').on('mouseleave', '.dancer', function() {
    $(this).toggleClass('enlarge');
    dancerSound.pause();
  });



});

