const helloworldFunction = require("../helloworld");
const chai = require("chai");
const expect = chai.expect;

describe("helloworldFunction", () => {

  it("should return 'helloworld'", () => {
    const instance = new helloworldFunction();
    const result = instance.helloworldFunction();
    expect(result).to.equal("helloworldshow");

  })
})



