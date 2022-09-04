console.log("Chitter is running")

const PeepsModel = require('./peepsModel');
const PeepsView = require('./peepsView');

const model = new PeepsModel();
console.log(model.addPeep("This is a test peep!"))
console.log(model.getPeeps());

const view = new PeepsView();

view.displayPeeps(["This is a test peep"]);