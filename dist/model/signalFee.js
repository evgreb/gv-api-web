import { Currency } from './currency';
import { FeeType } from './feeType';
import ApiClient from "../ApiClient";
export class SignalFee {
    constructor() {
    }
    static constructFromObject(data, obj = new SignalFee()) {
        if (data) {
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = FeeType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
        }
        return obj;
    }
}