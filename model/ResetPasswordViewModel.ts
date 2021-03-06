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

export class ResetPasswordViewModel { 
    public 'userId': string;
    public 'code': string;
    public 'password': string;
    public 'confirmPassword': string;

    constructor(data: {[key: string]: any}) { 
        this['userId'] = data['userId'];
        this['code'] = data['code'];
        this['password'] = data['password'];
        this['confirmPassword'] = data['confirmPassword'];
    }

    static constructFromObject(data: {[key: string]: any}): ResetPasswordViewModel | undefined {
        if (data) {
            return new ResetPasswordViewModel({ 
                'userId': ApiClient.convertToType(data['userId'], 'string'),
                'code': ApiClient.convertToType(data['code'], 'string'),
                'password': ApiClient.convertToType(data['password'], 'string'),
                'confirmPassword': ApiClient.convertToType(data['confirmPassword'], 'string'),
            });
        }
    }
}



