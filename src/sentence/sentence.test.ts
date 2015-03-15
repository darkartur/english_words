/// <reference path="../../typings/tsd.d.ts" />
require('source-map-support').install();

import _ = require("underscore");
import assert = require("assert");
import Sentence = require("./sentence");




describe('Sentence', () => {
    describe("#parse()", () => {
        it('One sentence text should be converted to array of one sentence', () => {
            assert.deepEqual(arrayToString(Sentence.parse("Be or not to be.")), ["Be or not to be."])
        });

        function arrayToString(sentences: Sentence[]) {
            return _.map<Sentence, string>(sentences, (sentence: Sentence) => {
                return sentence.toString();
            });
        }
    });
});