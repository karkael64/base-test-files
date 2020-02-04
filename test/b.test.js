import all from "./lib.js"

describe("test", function () {
  expect(all["hello"], "world", "expect")
  expectEquiv(all, {hello: "world"}, "expect equiv")
  expectThrow(() => { throw new Error }, "expect throw")
})
