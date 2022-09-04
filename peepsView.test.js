/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const PeepsModel = require("./peepsModel");
const PeepsView = require("./peepsView");

describe("PeepsView", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  it("displays one peep on the page", () => {
    const model = new PeepsModel();
    const view = new PeepsView(model);

    model.addPeep("This is a test peep");
    view.displayPeeps();

    expect(document.querySelectorAll(".peep-item").length).toBe(1);
    expect(document.querySelector(".peep-item").textContent).toBe;
  });

  it("clicking the button adds a new peep and displays it", () => {
    const model = new PeepsModel();
    const view = new PeepsView(model);

    const input = document.querySelector("#peep-input");
    input.value = "This is a test peep";

    const buttonEl = document.querySelector("#peep-button");
    buttonEl.click();

    expect(document.querySelectorAll(".peep-item").length).toBe(1);
    expect(document.querySelectorAll(".peep-item")[0].textContent).toBe(
      "This is a test peep"
    );
  });

  it("clicking the button again removes previously added notes", () => {
    const model = new PeepsModel();
    const view = new PeepsView(model);

    const input = document.querySelector("#peep-input");
    input.value = "This is a test peep";

    const buttonEl = document.querySelector("#peep-button");
    buttonEl.click();
    buttonEl.click();

    expect(document.querySelectorAll(".peep-item").length).toBe(2);
    expect(document.querySelectorAll(".peep-item")[0].textContent).toBe(
      "This is a test peep"
    );
  })
});
