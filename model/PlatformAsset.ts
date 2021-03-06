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

export class PlatformAsset { 
    public 'id': string;
    public 'name': string;
    public 'asset': string;
    public 'description': string;
    public 'icon': string;
    public 'color': string;
    public 'mandatoryFundPercent': number;
    public 'url': string;

    constructor(data: {[key: string]: any}) { 
        this['id'] = data['id'];
        this['name'] = data['name'];
        this['asset'] = data['asset'];
        this['description'] = data['description'];
        this['icon'] = data['icon'];
        this['color'] = data['color'];
        this['mandatoryFundPercent'] = data['mandatoryFundPercent'];
        this['url'] = data['url'];
    }

    static constructFromObject(data: {[key: string]: any}): PlatformAsset | undefined {
        if (data) {
            return new PlatformAsset({ 
                'id': ApiClient.convertToType(data['id'], 'string'),
                'name': ApiClient.convertToType(data['name'], 'string'),
                'asset': ApiClient.convertToType(data['asset'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'icon': ApiClient.convertToType(data['icon'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'mandatoryFundPercent': ApiClient.convertToType(data['mandatoryFundPercent'], 'number'),
                'url': ApiClient.convertToType(data['url'], 'string'),
            });
        }
    }
}



