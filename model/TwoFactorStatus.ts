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

export class TwoFactorStatus { 
    public 'twoFactorEnabled': boolean;

    constructor(data: {[key: string]: any}) { 
        this['twoFactorEnabled'] = data['twoFactorEnabled'];
    }

    static constructFromObject(data: {[key: string]: any}): TwoFactorStatus | undefined {
        if (data) {
            return new TwoFactorStatus({ 
                'twoFactorEnabled': ApiClient.convertToType(data['twoFactorEnabled'], 'boolean'),
            });
        }
    }
}



