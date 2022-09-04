console.log("Chitter is running")

const PeepsModel = require('./peepsModel');

const model = new PeepsModel();
console.log(model.addPeep("This is a test peep!"))
console.log(model.getPeeps());