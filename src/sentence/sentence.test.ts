/// <reference path="../../typings/tsd.d.ts" />
require('source-map-support').install();

import _ = require("underscore");
import assert = require("assert");
import Sentence = require("./sentence");

describe('Sentence', () => {
    describe("#parse()", () => {

        it('Parsing one sentence', () => {
            assert.deepEqual(arrayToString(Sentence.parse("Be or not to be")), ["Be or not to be"])
        });

        it('Parsing two sentences separated by ".w', () => {
            assert.deepEqual(
                arrayToString(Sentence.parse("Sentence #1. Sentence #2")),
                ["Sentence #1.", "Sentence #2"]
            );
        });

        it('Parsing two sentences separated by "?"', () => {
            assert.deepEqual(
                arrayToString(Sentence.parse("Question? Answer")),
                ["Question?", "Answer"]
            );
        });

        it('Sentences separated with "!"', () => {
            assert.deepEqual(
                arrayToString(Sentence.parse("Alarm! Ok")),
                ["Alarm!", "Ok"]
            );
        });

        function arrayToString(sentences: Sentence[]) {
            return _.map<Sentence, string>(sentences, (sentence: Sentence) => {
                return sentence.toString();
            });
        }
    });
});