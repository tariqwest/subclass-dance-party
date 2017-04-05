var FlipTurnDancer = class FlipTurnDancer extends Dancer{
  constructor(top, left, timeBetweenSteps){
      super(top, left, timeBetweenSteps);
      this.sound = 'flipTurnDancer';
      this.$node = $('<div data-sound="' + this.sound + '" class="flipTurnDancer"></div>');
    }

    step(){
      this.$node.toggleClass('.whirl');
      var bind = this.step.bind(this);
      setTimeout(bind, this.timeBetweenSteps);
    }

    lineUp(top, left){
      this.setPosition(top, left);
      this.$node.css('background-color', this._randomColor());
    }
};

  //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = this.step;
