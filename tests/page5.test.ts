// Point . matches any character.
// '.' 는 모든 문자와 매치됩니다.

describe("pagex", () => {
  const source = "Regular expressions are powerful!!!";

  test("case 1", () => {
    const reg_exp = /./;

    expect(reg_exp.test(source)).toBe(true);
  });

  test("case 2", () => {
    const reg_exp = /....../;

    expect(reg_exp.test(source)).toBe(true);
  });
});
