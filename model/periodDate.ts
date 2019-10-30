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

export class PeriodDate { 
    public 'dateFrom'?: Date;
    public 'dateTo'?: Date;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: PeriodDate = new PeriodDate()): PeriodDate {
        if (data) {
            if (data.hasOwnProperty('dateFrom')) {
                obj['dateFrom'] = ApiClient.convertToType(data['dateFrom'], 'Date');
            }
            if (data.hasOwnProperty('dateTo')) {
                obj['dateTo'] = ApiClient.convertToType(data['dateTo'], 'Date');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache

