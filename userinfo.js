/**
 * Inrhythm Engineers Information
 *
 */

"use strict";
var fs = require('fs');
var inquirer = require("inquirer");

console.log("Hi, welcome to InRhythm \n");

var questions =[
    {
        type: "confirm",
        name: "job_title",
        message: "Are you an Engineer ?",
        default:false
    }
];

//Questions for Engineers

var engg_questions = [
    {
        type: "input",
        name: "name",
        message: "What is your Name ?"

    },
    {
        type: "input",
        name: "age",
        message: "What's your age ?",
        validate: function(value){
            var age = value.match(/^([0-9]?\d|100)$/);
            if(age){
                return true;
            }
            else{
                return "Please enter a valid age between 1-100";
            }
        }
    },
    {
        type: "input",
        name: "phone",
        message: "What's your phone number ?",
        validate: function( value ) {
            var pass = value.match(/^([01]{1})?[\-\.\s]?\(?(\d{3})\)?[\-\.\s]?(\d{3})[\-\.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
            if (pass) {
                return true;
            } else {
                return "Please enter a valid phone number";
            }
        }
    },
    {
        type: "input",
        name: "gravatar",
        message: "Please enter the gravatar link :-",
        validate: function( value ) {
            var pass = value.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);
            if (pass) {
                return true;
            } else {
                return "Please enter link";
            }
        }
    },
    {
        type: "input",
        name: "twitter",
        message: "Please enter your twitter handle :-",
        filter: function(val){
            return "https://twitter.com/" + val;
        }
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your github handle :-",
        filter: function(val){
            return "https://github.com/" + val;
        }

    },
    {
        type: "input",
        name: "facebook",
        message: "Please enter your facebook profile link :-",
        validate: function( value ) {
            var pass = value.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);
            if (pass) {
                return true;
            } else {
                return "Please enter link";
            }
        }
    },
    {
        type: "input",
        name: "linkedin",
        message: "Please enter your linkedin profile link :-",
        validate: function( value ) {
            var pass = value.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);
            if (pass) {
                return true;
            } else {
                return "Please enter link";
            }
        }
    }

];

//Questions for HR Employees

var hr_questions =[
    {
        type: "input",
        name: "name",
        message: "What is your Name ?",


    },
    {
        type: "input",
        name: "age",
        message: "What's your age ?",
        validate: function(value){
            var age = value.match(/^([0-9]?\d|100)$/);
            if(age){
                return true;
            }
            else{
                return "Please enter a valid age between 1-100";
            }
        }
    },
    {
        type: "input",
        name: "phone",
        message: "What's your phone number ?",
        validate: function( value ) {
            var pass = value.match(/^([01]{1})?[\-\.\s]?\(?(\d{3})\)?[\-\.\s]?(\d{3})[\-\.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
            if (pass) {
                return true;
            } else {
                return "Please enter a valid phone number";
            }
        }
    },
    {
        type: "input",
        name: "linkedin",
        message: "Please enter your linkedin profile link :-",
        validate: function( value ) {
            var pass = value.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);
            if (pass) {
                return true;
            } else {
                return "Please enter link";
            }
        }
    }
];

inquirer.prompt( questions, function( answers ) {

    if(answers.job_title){
        inquirer.prompt(engg_questions, function(engineer_data){
            var outputFilename = 'engineers/' + engineer_data.name.replace(/\s/gi, "_") + ".json";
            fs.writeFile(outputFilename, JSON.stringify(engineer_data, null, 4), function(err) {
                if(err) {
                    console.log(err);
                } else {
                    console.log("JSON saved to " + outputFilename);
                }
            });

        })
    }
    else{
        inquirer.prompt(hr_questions, function(hr_data){
            var outputfile = 'hr/' + hr_data.name.replace(/\s/gi, "_") + ".json";
            fs.writeFile(outputFilename, JSON.stringify(hr_data, null, 4), function(err) {
                if(err) {
                    console.log(err);
                } else {
                    console.log("JSON saved to " + outputFilename);
                }
            });

        })
    }
});
