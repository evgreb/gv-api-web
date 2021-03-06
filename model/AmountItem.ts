/**
 * Core API v2.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Color } from './Color';
import { Currency } from './Currency';

import ApiClient from "../ApiClient";

export class AmountItem { 
    public 'amount': number;
    public 'currency': Currency;
    public 'color': Color;
    public 'logo': string;

    constructor(data: {[key: string]: any}) { 
        this['amount'] = data['amount'];
        this['currency'] = data['currency'];
        this['color'] = data['color'];
        this['logo'] = data['logo'];
    }

    static constructFromObject(data: {[key: string]: any}): AmountItem | undefined {
        if (data) {
            return new AmountItem({ 
                'amount': ApiClient.convertToType(data['amount'], 'number'),
                'currency': Currency.constructFromObject(data['currency']),
                'color': Color.constructFromObject(data['color']),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
            });
        }
    }
}



