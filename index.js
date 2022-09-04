console.log("Chitter is running")

const PeepsModel = require('./peepsModel');
const PeepsView = require('./peepsView');

const model = new PeepsModel();
model.addPeep("Displaying peep with the displayPeeps method")

const view = new PeepsView(model);
view.displayPeeps();