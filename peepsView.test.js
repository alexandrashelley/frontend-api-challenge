/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const PeepsView = require("./peepsView");

describe("PeepsView", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  it("displays one peep on the page", () => {
    const view = new PeepsView();

    view.displayPeeps(["This is a test peep"]);

    const peepElements = document.querySelectorAll("div.peep-item");
    expect(peepElements.length).toBe(1);
    expect(peepElements[0].innerText).toBe("This is a test peep");
  });
});
