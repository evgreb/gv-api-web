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

export class RecoveryCode { 
    public 'code'?: string;
    public 'isActive'?: boolean;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: RecoveryCode = new RecoveryCode()): RecoveryCode {
        if (data) {
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'string');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'boolean');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache

