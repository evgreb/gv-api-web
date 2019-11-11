import { Currency } from './Currency';
export declare class AmountWithCurrency {
    'amount': number;
    'currency': Currency;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AmountWithCurrency | undefined;
}