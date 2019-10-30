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

export class ProgramPwdUpdate { 
    public 'password'?: string;
    public 'twoFactorCode'?: string;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: ProgramPwdUpdate = new ProgramPwdUpdate()): ProgramPwdUpdate {
        if (data) {
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'string');
            }
            if (data.hasOwnProperty('twoFactorCode')) {
                obj['twoFactorCode'] = ApiClient.convertToType(data['twoFactorCode'], 'string');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


