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

export class FilterModelOld { 
    public 'key'?: string;
    public 'title'?: string;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: FilterModelOld = new FilterModelOld()): FilterModelOld {
        if (data) {
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'string');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache

