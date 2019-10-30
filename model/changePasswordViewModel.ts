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

export class ChangePasswordViewModel { 
    public 'oldPassword': string;
    public 'password': string;
    public 'confirmPassword'?: string;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: ChangePasswordViewModel = new ChangePasswordViewModel()): ChangePasswordViewModel {
        if (data) {
            if (data.hasOwnProperty('oldPassword')) {
                obj['oldPassword'] = ApiClient.convertToType(data['oldPassword'], 'string');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'string');
            }
            if (data.hasOwnProperty('confirmPassword')) {
                obj['confirmPassword'] = ApiClient.convertToType(data['confirmPassword'], 'string');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


