export class GenericResult<T> {
    hasError: boolean;
    errorMessages: string[];
    data?: T;

    constructor() {
        this.hasError = false;
        this.errorMessages = [];
    }

    public setProperty(src: GenericResult<T>) {
        this.hasError = src.hasError;
        this.errorMessages = src.errorMessages;
        this.data = src.data;
    }
}

export class SimpleResult {
    hasError: boolean;
    errorMessages: string[];

    constructor() {
        this.hasError = false;
        this.errorMessages = [];
    }

    public setProperty(src: SimpleResult) {
        this.hasError = src.hasError;
        this.errorMessages = src.errorMessages;
    }
}