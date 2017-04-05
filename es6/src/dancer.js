// Creates and returns a new dancer object that can step
var Dancer = class Dancer {
  constructor(top, left, timeBetweenSteps){
    this.$node = $('<span class="dancer"></span>');
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    this.sound = '';
  }

  setPosition(top, left) {
    var styleSettings = {
      top: top + 'px',
      left: left + 'px'
    };
    this.$node.css(styleSettings);
  };

  step() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    //setTimeout(this.step, this.timeBetweenSteps)  
  };

  _randomColor(){
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  }
}


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
//makeDancer.prototype.setPosition(20, 20);


