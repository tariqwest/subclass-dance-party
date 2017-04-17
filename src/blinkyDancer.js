var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.sound = 'blinkyDancer';
  this.$node = $('<span data-sound="' + this.sound + '" class="blinkyDancer"></span>');
  
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

//makeBlinkyDancer.prototype.oldStep = Dancer.prototype.step;


makeBlinkyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this);
    console.log('Blinky dancer step');
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };

makeBlinkyDancer.prototype.lineUp = function(top, left) {
   this.setPosition(top, left);
   this.$node.css('border-color', this._randomColor());
};

