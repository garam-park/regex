// If literal value of a special character is required, it must be escaped with a backslash \. Case 1 does not match anything as both characters a special, Case 2 matches all $, Case 3 matches $ only if it is the first and Case 4 the last character. Backslash has special meaning and must be also escaped for literal use (Case 5).
//특수 문자의 리터럴 값이 필요한 경우 백슬래시 \로 이스케이프해야 합니다. Case 1은 두 문자 모두 특수 문자이므로 아무 것도 일치하지 않으며 Case 2는 모든 $와 일치하며 Case 3은 첫 번째 문자인 경우에만 $와 일치하고 Case 4는 마지막 문자인 경우에만 일치합니다. 백슬래시는 특별한 의미를 가지며 문자 그대로 사용하려면 이스케이프 처리해야 합니다(Case 5).

describe("page4", () => {
  const source = "$12$ \\-\\ $25$";

  test("case1 - 둘다 특수 기호기 때문에 아무것도 매치되는 것이 없음", () => {
    const reg_exp = /^$/;

    expect(reg_exp.test(source)).toBe(false);
  });

  test("case2 - 특수 문자 $ 앞에 \\으로 이스케이프해서 '$'와 매치되는 것을 찾음", () => {
    // who 로 끝나는 문자열
    const reg_exp = /\$/;

    expect(reg_exp.test(source)).toBe(true);
  });

  test("case3", () => {
    // $로 시작하는 문자열
    const reg_exp = /^\$/;

    expect(reg_exp.test(source)).toBe(true);
    const source2 = "12$ \\-\\ $25$";
    // $로 시작되지 않기 때문에 매치가 안됨
    expect(reg_exp.test(source2)).toBe(false);
  });

  test("case4", () => {
    // $로 끝나는 문자열
    const reg_exp = /\$$/;

    expect(reg_exp.test(source)).toBe(true);
    const source2 = "$12$ \\-\\ $25";
    // $로 끝나지 않기 때문에 매치가 안됨
    expect(reg_exp.test(source2)).toBe(false);
  });

  test("case5", () => {
    // \ 를 찾음
    const reg_exp = /\\/;
    const source2 = "$12$ - $25$";
    expect(reg_exp.test(source)).toBe(true);
    expect(reg_exp.test(source2)).toBe(false);
  });
});
