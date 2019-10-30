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
import { AssetsValue } from './assetsValue';
import { OtherAssetsValue } from './otherAssetsValue';

import ApiClient from "../ApiClient";

export class ValueChartBar { 
    public 'value'?: number;
    public 'date'?: Date;
    public 'topAssets'?: Array<AssetsValue>;
    public 'otherAssetsValue'?: OtherAssetsValue;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: ValueChartBar = new ValueChartBar()): ValueChartBar {
        if (data) {
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('topAssets')) {
                obj['topAssets'] = ApiClient.convertToType(data['topAssets'], [AssetsValue]);
            }
            if (data.hasOwnProperty('otherAssetsValue')) {
                obj['otherAssetsValue'] = OtherAssetsValue.constructFromObject(data['otherAssetsValue']);
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


