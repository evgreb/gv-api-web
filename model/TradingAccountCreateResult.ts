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
import { TwoFactorAuthenticator } from './TwoFactorAuthenticator';

import ApiClient from "../ApiClient";

export class TradingAccountCreateResult { 
    public 'id': string;
    public 'twoFactorRequired': boolean;
    public 'twoFactor': TwoFactorAuthenticator;

    constructor(data: {[key: string]: any}) { 
        this['id'] = data['id'];
        this['twoFactorRequired'] = data['twoFactorRequired'];
        this['twoFactor'] = data['twoFactor'];
    }

    static constructFromObject(data: {[key: string]: any}): TradingAccountCreateResult | undefined {
        if (data) {
            return new TradingAccountCreateResult({ 
                'id': ApiClient.convertToType(data['id'], 'string'),
                'twoFactorRequired': ApiClient.convertToType(data['twoFactorRequired'], 'boolean'),
                'twoFactor': TwoFactorAuthenticator.constructFromObject(data['twoFactor']),
            });
        }
    }
}



