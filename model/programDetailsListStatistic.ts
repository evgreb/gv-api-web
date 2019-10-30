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
import { AmountWithCurrency } from './amountWithCurrency';

import ApiClient from "../ApiClient";

export class ProgramDetailsListStatistic { 
    public 'balance'?: AmountWithCurrency;
    public 'currentValue'?: number;
    public 'profitPercent'?: number;
    public 'profitValue'?: number;
    public 'drawdownPercent'?: number;
    public 'investorsCount'?: number;
    public 'tradesCount'?: number;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: ProgramDetailsListStatistic = new ProgramDetailsListStatistic()): ProgramDetailsListStatistic {
        if (data) {
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = AmountWithCurrency.constructFromObject(data['balance']);
            }
            if (data.hasOwnProperty('currentValue')) {
                obj['currentValue'] = ApiClient.convertToType(data['currentValue'], 'number');
            }
            if (data.hasOwnProperty('profitPercent')) {
                obj['profitPercent'] = ApiClient.convertToType(data['profitPercent'], 'number');
            }
            if (data.hasOwnProperty('profitValue')) {
                obj['profitValue'] = ApiClient.convertToType(data['profitValue'], 'number');
            }
            if (data.hasOwnProperty('drawdownPercent')) {
                obj['drawdownPercent'] = ApiClient.convertToType(data['drawdownPercent'], 'number');
            }
            if (data.hasOwnProperty('investorsCount')) {
                obj['investorsCount'] = ApiClient.convertToType(data['investorsCount'], 'number');
            }
            if (data.hasOwnProperty('tradesCount')) {
                obj['tradesCount'] = ApiClient.convertToType(data['tradesCount'], 'number');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


