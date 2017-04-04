var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.sound = 'blinkyDancer';
  this.$node = $('<span data-sound="' + this.sound + '" class="blinkyDancer"></span>');
  


  //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //this.oldStep = this.step;

  
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    //this.oldStep();

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
    var bind = this.step.bind(this);
    setTimeout(bind, this.timeBetweenSteps);
  };

makeBlinkyDancer.prototype.lineUp = function(top, left) {
   this.setPosition(top, left);
   this.$node.css('border-color', this._randomColor());
};

