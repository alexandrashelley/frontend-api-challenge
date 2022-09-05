console.log("Chitter is running")

const PeepsModel = require('./peepsModel');
const PeepsView = require('./peepsView');
const PeepsApi = require('./peepsApi')

const api = new PeepsApi();
const model = new PeepsModel();
const view = new PeepsView(model, api);