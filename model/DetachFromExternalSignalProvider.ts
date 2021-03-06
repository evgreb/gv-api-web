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

export class DetachFromExternalSignalProvider { 
    public 'tradingAccountId': string;

    constructor(data: {[key: string]: any}) { 
        this['tradingAccountId'] = data['tradingAccountId'];
    }

    static constructFromObject(data: {[key: string]: any}): DetachFromExternalSignalProvider | undefined {
        if (data) {
            return new DetachFromExternalSignalProvider({ 
                'tradingAccountId': ApiClient.convertToType(data['tradingAccountId'], 'string'),
            });
        }
    }
}



