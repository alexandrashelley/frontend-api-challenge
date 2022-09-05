const PeepsApi = require("./peepsApi");

require("jest-fetch-mock").enableMocks();

describe("The API class", () => {
  it("displays notes from the API using fetch", () => {
    const api = new PeepsApi();

    fetch.mockResponseOnce(
      JSON.stringify(["I am a peep coming from the server!"])
    );
    api.loadPeeps((returnedDataFromApi) => {
      expect(returnedDataFromApi).toEqual([
        "I am a peep coming from the server!",
      ]);
    });
  });
});
