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

export class PlatformCurrencyOld { 
    public 'name'?: string;
    public 'rateToGvt'?: number;
    public 'color'?: string;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: PlatformCurrencyOld = new PlatformCurrencyOld()): PlatformCurrencyOld {
        if (data) {
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'string');
            }
            if (data.hasOwnProperty('rateToGvt')) {
                obj['rateToGvt'] = ApiClient.convertToType(data['rateToGvt'], 'number');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'string');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache

