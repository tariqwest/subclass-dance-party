describe('wormDancer', function() {

  var wormDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    wormDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(wormDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node **********', function() {
    sinon.spy(wormDancer.$node, 'toggle');
    wormDancer.step();
    expect(wormDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(wormDancer, 'step');
      expect(wormDancer.step.callCount).to.be.equal(0);
      wormDancer.step();
      clock.tick(timeBetweenSteps - 1); // ? it seems an extra tick is necessary...
      expect(wormDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps - 1);
      expect(wormDancer.step.callCount).to.be.equal(2);
    });
  });
});
