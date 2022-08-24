// Alternating text can be enclosed in parentheses and alternatives separated with |.
// 대체 텍스트는 괄호로 묶고 대체 텍스트는 |로 구분할 수 있습니다.

describe("page10", () => {
  const source = "Monday Tuesday Friday";

  test("case 1", () => {
    const reg_exp = /(on|ues|rida)/g;

    const match = source.match(reg_exp);
    expect(match!).toEqual(["on", "ues", "rida"]);
  });

  test("case 2", () => {
    const reg_exp = /(Mon|Tues|Fri)day/g;

    const match = source.match(reg_exp);
    expect(match!).toEqual(["Monday", "Tuesday", "Friday"]);
  });

  test("case 3", () => {
    const reg_exp = /..(id|esd|nd)ay/g;

    const match = source.match(reg_exp);
    expect(match!).toEqual(["Monday", "Tuesday", "Friday"]);
  });

  test("case 4", () => {
    const reg_exp = /..(esd|nd)ay/g;

    const match = source.match(reg_exp);
    expect(match!).toEqual(["Monday", "Tuesday"]);
  });

  test("case 5", () => {
    const reg_exp = /..(id|nd)ay/g;

    const match = source.match(reg_exp);
    expect(match!).toEqual(["Monday", "Friday"]);
  });

  test("case 6", () => {
    const reg_exp = /..(id|esd)ay/g;

    const match = source.match(reg_exp);
    expect(match!).toEqual(["Tuesday", "Friday"]);
  });
});
