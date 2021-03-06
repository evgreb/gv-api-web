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

export class FundAssetPartWithIcon { 
    public 'icon': string;
    public 'color': string;
    public 'name': string;
    public 'asset': string;
    public 'percent': number;

    constructor(data: {[key: string]: any}) { 
        this['icon'] = data['icon'];
        this['color'] = data['color'];
        this['name'] = data['name'];
        this['asset'] = data['asset'];
        this['percent'] = data['percent'];
    }

    static constructFromObject(data: {[key: string]: any}): FundAssetPartWithIcon | undefined {
        if (data) {
            return new FundAssetPartWithIcon({ 
                'icon': ApiClient.convertToType(data['icon'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'name': ApiClient.convertToType(data['name'], 'string'),
                'asset': ApiClient.convertToType(data['asset'], 'string'),
                'percent': ApiClient.convertToType(data['percent'], 'number'),
            });
        }
    }
}



