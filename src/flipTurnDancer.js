var makeFlipTurnDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<div class="flipTurnDancer"></div>');
  //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = this.step;

  
};

makeFlipTurnDancer.prototype = Object.create(makeDancer.prototype);
makeFlipTurnDancer.prototype.constructor = makeFlipTurnDancer;

makeFlipTurnDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    //this.oldStep();

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggleClass('.whirl');
    var bind = this.step.bind(this);
    setTimeout(bind, this.timeBetweenSteps);
  };