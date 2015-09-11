describe('replacer', function() {
  it("Replaces hello with goodbye", function() {
    expect(replacer("hello", "hello", "goodbye")).to.equal("goodbye");
  });

  it("Replaces hello world with hello universe", function() {
    expect(replacer("hello world", "world", "universe")).to.equal("hello universe");
  });

  it("Replaces This assignment is boring with This asssignment is really boring", function() {
    expect(replacer("This assignment is boring", "boring", "really boring")).to.equal("This assignment is really boring");
  });
});
