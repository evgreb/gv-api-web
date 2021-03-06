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

export class ProfileHeaderViewModel { 
    public 'id': string;
    public 'name': string;
    public 'email': string;
    public 'url': string;
    public 'avatar': string;
    public 'countryCode': string;
    public 'notificationsCount': number;
    public 'isKycConfirmed': boolean;
    public 'isForexAllowed': boolean;
    public 'isTwoFactorEnabled': boolean;
    public 'isNewUser': boolean;
    public 'isPublicInvestor': boolean;
    public 'isUserNameFilled': boolean;

    constructor(data: {[key: string]: any}) { 
        this['id'] = data['id'];
        this['name'] = data['name'];
        this['email'] = data['email'];
        this['url'] = data['url'];
        this['avatar'] = data['avatar'];
        this['countryCode'] = data['countryCode'];
        this['notificationsCount'] = data['notificationsCount'];
        this['isKycConfirmed'] = data['isKycConfirmed'];
        this['isForexAllowed'] = data['isForexAllowed'];
        this['isTwoFactorEnabled'] = data['isTwoFactorEnabled'];
        this['isNewUser'] = data['isNewUser'];
        this['isPublicInvestor'] = data['isPublicInvestor'];
        this['isUserNameFilled'] = data['isUserNameFilled'];
    }

    static constructFromObject(data: {[key: string]: any}): ProfileHeaderViewModel | undefined {
        if (data) {
            return new ProfileHeaderViewModel({ 
                'id': ApiClient.convertToType(data['id'], 'string'),
                'name': ApiClient.convertToType(data['name'], 'string'),
                'email': ApiClient.convertToType(data['email'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'avatar': ApiClient.convertToType(data['avatar'], 'string'),
                'countryCode': ApiClient.convertToType(data['countryCode'], 'string'),
                'notificationsCount': ApiClient.convertToType(data['notificationsCount'], 'number'),
                'isKycConfirmed': ApiClient.convertToType(data['isKycConfirmed'], 'boolean'),
                'isForexAllowed': ApiClient.convertToType(data['isForexAllowed'], 'boolean'),
                'isTwoFactorEnabled': ApiClient.convertToType(data['isTwoFactorEnabled'], 'boolean'),
                'isNewUser': ApiClient.convertToType(data['isNewUser'], 'boolean'),
                'isPublicInvestor': ApiClient.convertToType(data['isPublicInvestor'], 'boolean'),
                'isUserNameFilled': ApiClient.convertToType(data['isUserNameFilled'], 'boolean'),
            });
        }
    }
}



