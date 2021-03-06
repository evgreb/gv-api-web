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

export class PlatformNews { 
    public 'date': Date;
    public 'title': string;
    public 'body': string;
    public 'logo': string;
    public 'url': string;
    public 'isHot': boolean;

    constructor(data: {[key: string]: any}) { 
        this['date'] = data['date'];
        this['title'] = data['title'];
        this['body'] = data['body'];
        this['logo'] = data['logo'];
        this['url'] = data['url'];
        this['isHot'] = data['isHot'];
    }

    static constructFromObject(data: {[key: string]: any}): PlatformNews | undefined {
        if (data) {
            return new PlatformNews({ 
                'date': ApiClient.convertToType(data['date'], 'Date'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'body': ApiClient.convertToType(data['body'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'isHot': ApiClient.convertToType(data['isHot'], 'boolean'),
            });
        }
    }
}



