class Sentence {

    constructor(private text: string) {

    }

    toString(): string {
        return this.text;
    }

    static parse(text: string): Sentence[] {
        return [new Sentence(text)];
    }

}

export = Sentence;