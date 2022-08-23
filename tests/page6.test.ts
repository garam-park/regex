// The point must be escaped if literal meaning is required.
// 리터럴 의미가 필요한 경우 점을 이스케이프해야 합니다.

describe("page6", () => {
  const source = "O.K.";

  test("case 1", () => {
    // as expression
    // 표현식으로
    const reg_exp = /./g;

    const match = source.match(reg_exp);
    expect(Object.values(match!)).toEqual(["O", ".", "K", "."]);
  });

  test("case 2", () => {
    // as literal
    // 문자 그대로
    const reg_exp = /\./g;

    const match = source.match(reg_exp);
    expect(Object.values(match!)).toEqual([".", "."]);
  });

  test("case 3", () => {
    const reg_exp = /\..\./g;

    const match = source.match(reg_exp);
    expect(Object.values(match!)).toEqual([".K."]);
  });
});
