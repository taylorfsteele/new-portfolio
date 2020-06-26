const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../public/index.html"), "utf8");

jest.dontMock("fs");

test("Script is the Bundle", () => {
  document.documentElement.innerHTML = html.toString();
  expect(document.getElementById("script").src).toContain("bundle.js");
});
