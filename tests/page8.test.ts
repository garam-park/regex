// A range of characters can be specified with [ - ] syntax. Case 1 and Case 2 are equivalent. Several ranges can be given in one expression (Case 5).
// [ - ] 구문을 사용하여 문자 범위를 지정할 수 있습니다. 사례 1과 사례 2는 동일합니다. 하나의 표현식에 여러 범위를 지정할 수 있습니다(Case 5).

describe("page8", () => {
  const source =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789";

  test("case 1", () => {
    const reg_exp = /[C-K]/g;

    const match = source.match(reg_exp);
    expect(match!).toEqual(["C", "D", "E", "F", "G", "H", "I", "J", "K"]);
  });

  test("case 2", () => {
    const reg_exp = /[CDEFGHIJK]/g;

    const match = source.match(reg_exp);
    expect(match!).toEqual(["C", "D", "E", "F", "G", "H", "I", "J", "K"]);
  });

  test("case 3", () => {
    const reg_exp = /[a-d]/g;
    const match = source.match(reg_exp);
    expect(match!).toEqual(["a", "b", "c", "d"]);
  });
  test("case 4", () => {
    const reg_exp = /[2-6]/g;

    const match = source.match(reg_exp);
    expect(match!).toEqual(["2", "3", "4", "5", "6"]);
  });
  test("case 5", () => {
    const reg_exp = /[C-Ka-d2-6]/g;

    const match = source.match(reg_exp);
    expect(match!).toEqual([
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "a",
      "b",
      "c",
      "d",
      "2",
      "3",
      "4",
      "5",
      "6",
    ]);
  });
});
