var WormDancer = class WormDancer extends Dancer{
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.sound = 'wormDancer';
    this.$node = $('<div data-sound="' + this.sound + '" class="wormDancer"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>');
  }
  
  //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = this.step;
  step() {
    this.$node.toggleClass('wormDancer-hot');
    var bind = this.step.bind(this);
    setTimeout(bind, this.timeBetweenSteps);
  }
  
  lineUp(top, left) {
    this.setPosition(top, left);
    $(this.$node).find('div').css('background-color', this._randomColor());
  }
};
