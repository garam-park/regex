test("case1", () => {
  const source = "Hello, world!";
  const reg_exp = /Hello/;

  expect(reg_exp.test(source)).toBe(true);
});

test("case2", () => {
  const source = "Hello, world!";
  const reg_exp = /hello/;

  expect(reg_exp.test(source)).toBe(true);
});
