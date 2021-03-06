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

import ApiClient from "../ApiClient";

export class ProgramUpdate { 
    public 'title': string;
    public 'description': string;
    public 'logo': string;
    public 'entryFee': number;
    public 'exitFee': number;
    public 'successFee': number;
    public 'stopOutLevel': number;
    public 'investmentLimit': number;
    public 'tradesDelay': TradesDelayEnum;

    constructor(data: {[key: string]: any}) { 
        this['title'] = data['title'];
        this['description'] = data['description'];
        this['logo'] = data['logo'];
        this['entryFee'] = data['entryFee'];
        this['exitFee'] = data['exitFee'];
        this['successFee'] = data['successFee'];
        this['stopOutLevel'] = data['stopOutLevel'];
        this['investmentLimit'] = data['investmentLimit'];
        this['tradesDelay'] = data['tradesDelay'];
    }

    static constructFromObject(data: {[key: string]: any}): ProgramUpdate | undefined {
        if (data) {
            return new ProgramUpdate({ 
                'title': ApiClient.convertToType(data['title'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'entryFee': ApiClient.convertToType(data['entryFee'], 'number'),
                'exitFee': ApiClient.convertToType(data['exitFee'], 'number'),
                'successFee': ApiClient.convertToType(data['successFee'], 'number'),
                'stopOutLevel': ApiClient.convertToType(data['stopOutLevel'], 'number'),
                'investmentLimit': ApiClient.convertToType(data['investmentLimit'], 'number'),
                'tradesDelay': ApiClient.convertToType(data['tradesDelay'], 'string'),
            });
        }
    }
}


type TradesDelayEnum = 'None' | 'FiveMinutes' | 'FifteenMinutes' | 'ThirtyMinutes' | 'OneHour' | 'SixHours';



