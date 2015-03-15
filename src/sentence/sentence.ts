/// <reference path="../../typings/tsd.d.ts" />

import _ = require("underscore");

class Sentence {

    constructor(private text: string) {

    }

    toString(): string {
        return this.text;
    }

    static parse(text: string): Sentence[] {
        return _.map<string,Sentence>(splitChain(text, ['.', '?', '!']), (str: string) => {
            return new Sentence(str);
        });
    }

}

function splitChain(text: string, chain: string[]): string[] {
    return _.flatten(_.map(splitParse(text, chain.shift()), function (str) {
        return chain.length ? splitChain(str, chain.slice(0)) : str;
    }));
}

function splitParse(text: string, symbol: string): string[] {
    var r = _.compact(text.split(symbol)),
        last = r.pop();

    r = _.map(r, function (str) {
        return str + symbol;
    }).concat(last);

    r = _.map(r, function (str) {
        str = str.trim();
        return str;
    });

    return r;
}

export = Sentence;