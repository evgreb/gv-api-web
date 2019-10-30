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

import ApiClient from "../ApiClient";

export class ProgramUpdate { 
    public 'title'?: string;
    public 'description'?: string;
    public 'logo'?: string;
    public 'entryFee'?: number;
    public 'exitFee'?: number;
    public 'successFee'?: number;
    public 'stopOutLevel'?: number;
    public 'investmentLimit'?: number;
    public 'tradesDelay'?: TradesDelayEnum;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: ProgramUpdate = new ProgramUpdate()): ProgramUpdate {
        if (data) {
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'string');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'string');
            }
            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'number');
            }
            if (data.hasOwnProperty('exitFee')) {
                obj['exitFee'] = ApiClient.convertToType(data['exitFee'], 'number');
            }
            if (data.hasOwnProperty('successFee')) {
                obj['successFee'] = ApiClient.convertToType(data['successFee'], 'number');
            }
            if (data.hasOwnProperty('stopOutLevel')) {
                obj['stopOutLevel'] = ApiClient.convertToType(data['stopOutLevel'], 'number');
            }
            if (data.hasOwnProperty('investmentLimit')) {
                obj['investmentLimit'] = ApiClient.convertToType(data['investmentLimit'], 'number');
            }
            if (data.hasOwnProperty('tradesDelay')) {
                obj['tradesDelay'] = ApiClient.convertToType(data['tradesDelay'], 'string');
            }
        }
        return obj;
    }
}


type TradesDelayEnum = 'None' | 'FiveMinutes' | 'FifteenMinutes' | 'ThirtyMinutes' | 'OneHour' | 'SixHours';


//modelGenericEnums.mustache


