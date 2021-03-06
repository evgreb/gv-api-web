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
import { FollowAssetPlatformInfo } from './FollowAssetPlatformInfo';
import { FundAssetPlatformInfo } from './FundAssetPlatformInfo';
import { ProgramAssetPlatformInfo } from './ProgramAssetPlatformInfo';
import { TradingAccountAssetPlatformInfo } from './TradingAccountAssetPlatformInfo';

import ApiClient from "../ApiClient";

export class AssetPlatformInfo { 
    public 'programInfo': ProgramAssetPlatformInfo;
    public 'tradingAccountInfo': TradingAccountAssetPlatformInfo;
    public 'fundInfo': FundAssetPlatformInfo;
    public 'followInfo': FollowAssetPlatformInfo;

    constructor(data: {[key: string]: any}) { 
        this['programInfo'] = data['programInfo'];
        this['tradingAccountInfo'] = data['tradingAccountInfo'];
        this['fundInfo'] = data['fundInfo'];
        this['followInfo'] = data['followInfo'];
    }

    static constructFromObject(data: {[key: string]: any}): AssetPlatformInfo | undefined {
        if (data) {
            return new AssetPlatformInfo({ 
                'programInfo': ProgramAssetPlatformInfo.constructFromObject(data['programInfo']),
                'tradingAccountInfo': TradingAccountAssetPlatformInfo.constructFromObject(data['tradingAccountInfo']),
                'fundInfo': FundAssetPlatformInfo.constructFromObject(data['fundInfo']),
                'followInfo': FollowAssetPlatformInfo.constructFromObject(data['followInfo']),
            });
        }
    }
}



