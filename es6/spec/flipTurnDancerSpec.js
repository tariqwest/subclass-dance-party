describe('flipTurnDancer', function() {

  var flipTurnDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    flipTurnDancer = new makeFlipTurnDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(flipTurnDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node **********', function() {
    sinon.spy(flipTurnDancer.$node, 'toggleClass');
    flipTurnDancer.step();
    expect(flipTurnDancer.$node.toggleClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(flipTurnDancer, 'step');
      expect(flipTurnDancer.step.callCount).to.be.equal(0);
      flipTurnDancer.step();
      clock.tick(timeBetweenSteps - 1); // ? it seems an extra tick is necessary...
      expect(flipTurnDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps - 1);
      expect(flipTurnDancer.step.callCount).to.be.equal(2);
    });
  });
});
