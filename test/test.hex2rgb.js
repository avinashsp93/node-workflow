var hex2rgb = require("../src/js/lib/hex2rgb.js");
var expect = require("chai").expect;

describe("hex to rgb conversion", function(){
    it("should fail with less than 3 characters", function(done){
        hex2rgb("#ff", function(err){
            expect(err).to.exist;
            done();
        });
    });
});