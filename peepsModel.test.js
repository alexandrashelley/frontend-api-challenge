const PeepsModel = require("./peepsModel");

describe("Peeps model class", () => {
  it("returns an empty list of peeps", () => {
    const model = new PeepsModel();
    expect(model.getPeeps()).toEqual([]);
  });

  it("adds peep to list of peeps", () => {
    const model = new PeepsModel();
    model.addPeep("Pub anyone?");
    model.addPeep("Loving House of the Dragon!");

    expect(model.getPeeps()).toEqual([
      "Pub anyone?",
      "Loving House of the Dragon!",
    ]);
  });

  it("returns an empty list of peeps again", () => {
    const model = new PeepsModel();
    model.addPeep("Pub anyone?");
    model.addPeep("Loving House of the Dragon!");
    model.reset();

    expect(model.getPeeps()).toEqual([]);
  });
});
