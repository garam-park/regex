//Inside square brackets "[]" a list of characters can be provided. The expression matches if any of these characters is found. The order of characters is insignificant.(Case 3)
// 대괄호 "[]" 안에 문자 목록을 제공할 수 있습니다. 이 문자 중 하나라도 발견되면 표현식이 일치합니다. 문자의 순서는 중요하지 않습니다.(Case 3)

describe("page7", () => {
  const source = "How do you do?";

  test("case 1", () => {
    // o 나 y 나 u 를 찾는 정규표현식
    const reg_exp = /[oyu]/g;

    const match = source.match(reg_exp);
    expect(match).toEqual(["o", "o", "y", "o", "u", "o"]);
  });

  test("case 2", () => {
    // d 나 H 로 시작하는 두글자
    const reg_exp = /[dH]./g;

    const match = source.match(reg_exp);
    expect(match).toEqual(["Ho", "do", "do"]);
  });

  test("case 3", () => {
    // o나 w나 y로 시작하고 y나 o나 w로 끝나는 두글자
    const reg_exp = /[owy][yow]/g;

    const match = source.match(reg_exp);
    expect(match).toEqual(["ow", "yo"]);
  });
});
