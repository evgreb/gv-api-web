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
import { BalanceChartElementOld } from './balanceChartElementOld';

import ApiClient from "../ApiClient";

export class FundBalanceChartOld { 
    public 'balance'?: number;
    public 'balanceChart'?: [BalanceChartElementOld];
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: FundBalanceChartOld = new FundBalanceChartOld()): FundBalanceChartOld {
        if (data) {
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'number');
            }
            if (data.hasOwnProperty('balanceChart')) {
                obj['balanceChart'] = ApiClient.convertToType(data['balanceChart'], [BalanceChartElementOld]);
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


