const { _saveQuestion } = require("../utils/_DATA");

describe("_saveQuestion", () => {
  it("should return true when correctly formatted data is passed in", async () => {
    const question = {
      optionOneText: "1",
      optionTwoText: "2",
      author: "sarahedo",
    };

    const results = await _saveQuestion(question);

    expect(results).toMatchObject({
      author: question.author,
    });
  });

  it("should return an error if incorrect data is passed in", async () => {
    const question = {
      optionOneText: null,
      optionTwoText: "asdf",
      author: "bob",
    };

    await expect(() => _saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});
