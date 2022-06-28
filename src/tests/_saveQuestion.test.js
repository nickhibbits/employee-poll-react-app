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

  // it("should return an error if incorrect data is passed in", async () => {
  //   const qid = "6ni6ok3ym7mf1p33lnez";

  //   const results = await _saveQuestion(qid);

  //   expect(results).toThrow();
  // });
});
