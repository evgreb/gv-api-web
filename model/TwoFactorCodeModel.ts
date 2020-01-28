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

export class TwoFactorCodeModel { 
    public 'twoFactorCode': string;

    constructor(data: {[key: string]: any}) { 
        this['twoFactorCode'] = data['twoFactorCode'];
    }

    static constructFromObject(data: {[key: string]: any}): TwoFactorCodeModel | undefined {
        if (data) {
            return new TwoFactorCodeModel({ 
                'twoFactorCode': ApiClient.convertToType(data['twoFactorCode'], 'string'),
            });
        }
    }
}


