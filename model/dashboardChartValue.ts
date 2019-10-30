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
import { ChartSimple } from './chartSimple';
import { ValueChartBar } from './valueChartBar';

import ApiClient from "../ApiClient";

export class DashboardChartValue { 
    public 'investedProgramsInfo'?: [ValueChartBar];
    public 'balanceChart'?: [ChartSimple];
    public 'value'?: number;
    public 'valueCurrency'?: number;
    public 'changePercent'?: number;
    public 'changeValue'?: number;
    public 'changeValueCurrency'?: number;
    public 'rate'?: number;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: DashboardChartValue = new DashboardChartValue()): DashboardChartValue {
        if (data) {
            if (data.hasOwnProperty('investedProgramsInfo')) {
                obj['investedProgramsInfo'] = ApiClient.convertToType(data['investedProgramsInfo'], [ValueChartBar]);
            }
            if (data.hasOwnProperty('balanceChart')) {
                obj['balanceChart'] = ApiClient.convertToType(data['balanceChart'], [ChartSimple]);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'number');
            }
            if (data.hasOwnProperty('valueCurrency')) {
                obj['valueCurrency'] = ApiClient.convertToType(data['valueCurrency'], 'number');
            }
            if (data.hasOwnProperty('changePercent')) {
                obj['changePercent'] = ApiClient.convertToType(data['changePercent'], 'number');
            }
            if (data.hasOwnProperty('changeValue')) {
                obj['changeValue'] = ApiClient.convertToType(data['changeValue'], 'number');
            }
            if (data.hasOwnProperty('changeValueCurrency')) {
                obj['changeValueCurrency'] = ApiClient.convertToType(data['changeValueCurrency'], 'number');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'number');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


