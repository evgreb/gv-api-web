/**
 * Core API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Currency } from './currency';
import { FeeType } from './feeType';

import ApiClient from "../ApiClient";

export class SignalFee { 
    public 'title'?: string;
    public 'type'?: FeeType;
    public 'value'?: number;
    public 'currency'?: Currency;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: SignalFee = new SignalFee()): SignalFee {
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


//modelGenericEnums.mustache


