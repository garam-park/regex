// Each character inside the search pattern is significant including whitespace characters (space, tab, new line).
// 검색 패턴 내의 각 문자는 공백 문자(공백, 탭, 새 줄)를 포함하여 중요합니다.

test("case1", () => {
  const source = "Hello, world!";
  const reg_exp = /Hello, world/;

  expect(reg_exp.test(source)).toBe(true);
});

test("case2", () => {
  const source = "Hello, world!";
  const reg_exp = /Hello,    world/;

  expect(reg_exp.test(source)).toBe(false);
});
