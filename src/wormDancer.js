var makeWormDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.sound = 'wormDancer';
  this.$node = $('<div data-sound="' + this.sound + '" class="wormDancer"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>');
  
  //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = this.step;

  
};

makeWormDancer.prototype = Object.create(makeDancer.prototype);
makeWormDancer.prototype.constructor = makeWormDancer;

//makeBlinkyDancer.prototype.oldStep = Dancer.prototype.step;


makeWormDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggleClass('wormDancer-hot');

  };


makeWormDancer.prototype.lineUp = function(top, left) {
   this.setPosition(top, left);
    $(this.$node).find('div').css('background-color', this._randomColor());
};