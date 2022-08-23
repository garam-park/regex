// Regular expressions are case sensitive. Therefore Case 1 will find the specified text, but Case 2 will not.
// 정규표현식은 대소문자를 구분합니다. 그러므로 케이스1는 문자열을 찾을수 있지만 케이스2는 찾지 못합니다.

describe("pagex", () => {
  const source = "";

  test("case 1", () => {
    const reg_exp = /./;

    expect(reg_exp.test(source)).toBe(true);
  });
});
