// Some characters have special meanings. Character ^ matches the beginning of the line (Case 1) while dollar sign $ the end of the line (Case 2)
// 일부 문자에는 특별한 의미가 있습니다. 문자 ^는 줄의 시작과 일치하고(Case 1) 달러 기호 $는 줄의 끝(Case 2)과 일치합니다.

describe("page3", () => {
  const source1 = "who is who";
  const source2 = "G is who";
  const source3 = "who is G";

  test("case1", () => {
    // who 로 시작하는 문자열
    const reg_exp = /^who/;

    expect(reg_exp.test(source1)).toBe(true);
    expect(reg_exp.test(source2)).toBe(false);
    expect(reg_exp.test(source3)).toBe(true);
  });

  test("case2", () => {
    // who 로 끝나는 문자열
    const reg_exp = /who$/;

    expect(reg_exp.test(source1)).toBe(true);
    expect(reg_exp.test(source2)).toBe(true);
    expect(reg_exp.test(source3)).toBe(false);
  });
});
