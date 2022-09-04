const PeepsModel = require("./peepsModel");

class PeepsView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");
    this.buttonEl = document.querySelector("#peep-button");
    this.peepInput = document.querySelector("#peep-input");

    this.buttonEl.addEventListener("click", () => {
      this.addPeep();
    });
  }
  displayPeeps() {
    document.querySelectorAll(".peep-item").forEach((element) => {
      element.remove();
    });
    const peeps = this.model.getPeeps();

    peeps.forEach((peep) => {
      let newPeep = document.createElement("div");
      newPeep.className = "peep-item";
      newPeep.textContent = peep;
      this.mainContainerEl.append(newPeep);
    });
  }

  addPeep() {
    this.model.addPeep(this.peepInput.value);
    this.displayPeeps();
  }
}

module.exports = PeepsView;
