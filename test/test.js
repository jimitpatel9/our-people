
/**
 * Inquirer public API test
 */

var assert = require("assert");
var expect = require("chai").expect;
var inquirer = require("../node_modules/inquirer/lib/inquirer");

describe("inquirer.prompt", function() {

    beforeEach(function () {
        this.prompt = inquirer.createPromptModule();
    });

    it("should take a single prompt and return answer", function( done ) {
        var prompt = {
            type: "input",
            name: "q1",
            message: "message",
            default: "bar"
        };

        var ui = this.prompt( prompt, function( answers ) {
            expect(answers.q1).to.equal("bar");
            done();
        });

        ui.rl.emit("line");
    });

});