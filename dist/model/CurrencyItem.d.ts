import { Currency } from './Currency';
export declare class CurrencyItem {
    'title': string;
    'logo': string;
    'currency': Currency;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): CurrencyItem | undefined;
}
