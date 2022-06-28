const { _saveQuestionAnswer } = require("../utils/_DATA");

describe("_saveQuestionAnswer", () => {
  it("should return true when correctly formatted data is passed in", async () => {
    const authedUser = "sarahedo";
    const qid = "6ni6ok3ym7mf1p33lnez";
    const answer = "optionOne";

    const results = await _saveQuestionAnswer({ authedUser, qid, answer });

    expect(results).toBe(true);
  });

  it("should return an error if incorrect data is passed in", async () => {
    const qid = "6ni6ok3ym7mf1p33lnez";
    const authedUser = "Bob";
    const answer = null;

    await expect(() =>
      _saveQuestionAnswer({ authedUser, qid, answer })
    ).rejects.toEqual("Please provide authedUser, qid, and answer");
  });
});
