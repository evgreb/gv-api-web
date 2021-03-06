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
import { PrivateTradingAccountType } from './PrivateTradingAccountType';

import ApiClient from "../ApiClient";

export class PrivateTradingAccountFullTradingAccountDetails { 
    public 'currency': CurrencyEnum;
    public 'leverage': number;
    public 'apiKey': string;
    public 'login': string;
    public 'balance': number;
    public 'type': PrivateTradingAccountType;
    public 'subscriptions': number;
    public 'isExternal': boolean;

    constructor(data: {[key: string]: any}) { 
        this['currency'] = data['currency'];
        this['leverage'] = data['leverage'];
        this['apiKey'] = data['apiKey'];
        this['login'] = data['login'];
        this['balance'] = data['balance'];
        this['type'] = data['type'];
        this['subscriptions'] = data['subscriptions'];
        this['isExternal'] = data['isExternal'];
    }

    static constructFromObject(data: {[key: string]: any}): PrivateTradingAccountFullTradingAccountDetails | undefined {
        if (data) {
            return new PrivateTradingAccountFullTradingAccountDetails({ 
                'currency': ApiClient.convertToType(data['currency'], 'string'),
                'leverage': ApiClient.convertToType(data['leverage'], 'number'),
                'apiKey': ApiClient.convertToType(data['apiKey'], 'string'),
                'login': ApiClient.convertToType(data['login'], 'string'),
                'balance': ApiClient.convertToType(data['balance'], 'number'),
                'type': PrivateTradingAccountType.constructFromObject(data['type']),
                'subscriptions': ApiClient.convertToType(data['subscriptions'], 'number'),
                'isExternal': ApiClient.convertToType(data['isExternal'], 'boolean'),
            });
        }
    }
}


type CurrencyEnum = 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';



