$(document).ready(function() {
  window.dancers = [];
  var dancerSound;

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-type');
    
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var topHeight = $('h1').height() + $('.topbar').height();
    var dancer = new dancerMakerFunction(
      Math.random() * ($('body').height() - topHeight) + (topHeight-30),
      ($("body").width() - 20) * Math.random(),
      1000
    );
    dancer.setPosition(dancer.top, dancer.left);
    $(dancer.$node).addClass('dancer');
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    dancer.step();
  });

  $('.lineupDancerButton').on('click', function(event) {
      if(dancerSound){
        dancerSound.pause();
      }
      if($('.unpaired-x')){
        $('body').append($('.unpaired-x').find('.dancer'));
        $('.unpaired-x').remove();
      }
      var top = $("body").height() / 2;
      var left = ($("body").width() / 2) - (window.dancers.length * 50);
      for(var i=0; i<window.dancers.length; i++){
        window.dancers[i].lineUp(top, left);
        left += 100;
      }
    });

  $('.pairDancerButton').on('click', function(event) {
    if(dancerSound){
      dancerSound.pause();
    }
    if($('.unpaired-x')){
      $('body').append($('.unpaired-x').find('.dancer'));
      $('.unpaired-x').remove();
    }
    window.dancers.sort(function(a, b){return 0.5 - Math.random()});
    for (var i = 0; i < window.dancers.length - 1; i+=2) {
      var topHeight = $('h1').height() + $('.topbar').height();
      var randomTop = Math.random() * ($('body').height() - topHeight) + (topHeight-30);
      var randomLeft = Math.random() * ($('body').width() - 20);
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

      dancerSound = new Audio($($unpaired).data('sound') + '.mp3');
      dancerSound.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
      }, false);
      dancerSound.play();
    } 
  });

  $('body').on('mouseenter', '.dancer', function() {
    $(this).toggleClass('enlarge');
    //dancerSound.pause();
    dancerSound = new Audio($(this).data('sound') + '.mp3');
    dancerSound.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);
    dancerSound.play();
  });

  $('body').on('mouseleave', '.dancer', function() {
    dancerSound.pause();
    $(this).toggleClass('enlarge');
  });

});

