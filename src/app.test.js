const { dayOfTheWeek } = require("./app");
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../public/index.html"), "utf8");

jest.dontMock("fs");

test("getDay returns the long-format day of the week", () => {
  const day = dayOfTheWeek(new Date("3/11/2020"));
  expect(day).toBe("Wednesday");
});

describe("button", function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
  });

  it("Script is the Bundle", function () {
    expect(document.getElementById("script").src).toContain("bundle.js");
  });
});
