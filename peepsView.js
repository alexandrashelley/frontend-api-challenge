class PeepsView {
  displayPeeps(peeps) {
    peeps.forEach((peep) => {
      const newElement = document.createElement("div");
      newElement.className = "peep-item";
      newElement.innerText = peep;

      document.querySelector("#main-container").append(newElement);
    });
  }
}

module.exports = PeepsView;
