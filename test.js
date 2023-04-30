describe("Math.random()", () => {
  it("should return a number between 0 and 1", () => {
    const randomNumber = Math.random();
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(1);
  });

  it("should not always return the same number", () => {
    const randomNumber1 = Math.random();
    const randomNumber2 = Math.random();
    expect(randomNumber1).not.toBe(randomNumber2);
  });
});
