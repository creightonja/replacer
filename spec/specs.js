describe('replacer', function() {
  it("Replaces hello with goodbye", function() {
    expect(replacer("hello", "hello", "goodbye")).to.equal("goodbye");
  });

  it("Replaces hello world with hello universe", function() {
    expect(replacer("hello world", "world", "universe")).to.equal("hello universe");
  });
});
