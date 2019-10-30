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

import ApiClient from "../ApiClient";

export class ConvertingDetails { 
    public 'currencyTo'?: Currency;
    public 'currencyToName'?: string;
    public 'amountTo'?: number;
    public 'rateValue'?: number;
    public 'currencyToLogo'?: string;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: ConvertingDetails = new ConvertingDetails()): ConvertingDetails {
        if (data) {
            if (data.hasOwnProperty('currencyTo')) {
                obj['currencyTo'] = Currency.constructFromObject(data['currencyTo']);
            }
            if (data.hasOwnProperty('currencyToName')) {
                obj['currencyToName'] = ApiClient.convertToType(data['currencyToName'], 'string');
            }
            if (data.hasOwnProperty('amountTo')) {
                obj['amountTo'] = ApiClient.convertToType(data['amountTo'], 'number');
            }
            if (data.hasOwnProperty('rateValue')) {
                obj['rateValue'] = ApiClient.convertToType(data['rateValue'], 'number');
            }
            if (data.hasOwnProperty('currencyToLogo')) {
                obj['currencyToLogo'] = ApiClient.convertToType(data['currencyToLogo'], 'string');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


