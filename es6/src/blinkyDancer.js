var BlinkyDancer = class BlinkyDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.sound = 'blinkyDancer';
    this.$node = $('<div data-sound="' + this.sound + '" class="blinkyDancer"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>');
  }
  //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //this.oldStep = this.step;
  step() {
    // call the old version of step at the beginning of any call to this new version of step
    //this.oldStep();

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();
    var bind = this.step.bind(this);
    setTimeout(bind, this.timeBetweenSteps);
  }
  
  lineUp(top, left) {
    this.setPosition(top, left);
    $(this.$node).find('.double-bounce1, .double-bounce2').css('background-color', this._randomColor());
  }
};