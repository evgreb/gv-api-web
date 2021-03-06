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
import { BrokerTradeServerType } from './BrokerTradeServerType';

import ApiClient from "../ApiClient";

export class DashboardTradingAssetBrokerDetails { 
    public 'id': string;
    public 'logo': string;
    public 'name': string;
    public 'type': BrokerTradeServerType;

    constructor(data: {[key: string]: any}) { 
        this['id'] = data['id'];
        this['logo'] = data['logo'];
        this['name'] = data['name'];
        this['type'] = data['type'];
    }

    static constructFromObject(data: {[key: string]: any}): DashboardTradingAssetBrokerDetails | undefined {
        if (data) {
            return new DashboardTradingAssetBrokerDetails({ 
                'id': ApiClient.convertToType(data['id'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'name': ApiClient.convertToType(data['name'], 'string'),
                'type': BrokerTradeServerType.constructFromObject(data['type']),
            });
        }
    }
}



