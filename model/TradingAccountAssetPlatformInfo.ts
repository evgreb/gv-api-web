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
import { TradingAccountMinCreateAmount } from './TradingAccountMinCreateAmount';

import ApiClient from "../ApiClient";

export class TradingAccountAssetPlatformInfo { 
    public 'minAmounts': Array<TradingAccountMinCreateAmount>;

    constructor(data: {[key: string]: any}) { 
        this['minAmounts'] = data['minAmounts'];
    }

    static constructFromObject(data: {[key: string]: any}): TradingAccountAssetPlatformInfo | undefined {
        if (data) {
            return new TradingAccountAssetPlatformInfo({ 
                'minAmounts': ApiClient.convertToType(data['minAmounts'], [TradingAccountMinCreateAmount]),
            });
        }
    }
}


