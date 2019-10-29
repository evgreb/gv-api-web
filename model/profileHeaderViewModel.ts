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
    public id?: string;
    public name?: string;
    public email?: string;
    public avatar?: string;
    public countryCode?: string;
    public notificationsCount?: number;
    public favoritesCount?: number;
    public kycConfirmed?: boolean;
    public allowForex?: boolean;
    public isTwoFactorEnabled?: boolean;
    public isNewUser?: boolean;

    static constructFromObject(data: {[key: string]: any}, obj: ProfileHeaderViewModel = new ProfileHeaderViewModel()): ProfileHeaderViewModel {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'string');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'string');
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = ApiClient.convertToType(data['avatar'], 'string');
            }
            if (data.hasOwnProperty('countryCode')) {
                obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'string');
            }
            if (data.hasOwnProperty('notificationsCount')) {
                obj['notificationsCount'] = ApiClient.convertToType(data['notificationsCount'], 'number');
            }
            if (data.hasOwnProperty('favoritesCount')) {
                obj['favoritesCount'] = ApiClient.convertToType(data['favoritesCount'], 'number');
            }
            if (data.hasOwnProperty('kycConfirmed')) {
                obj['kycConfirmed'] = ApiClient.convertToType(data['kycConfirmed'], 'boolean');
            }
            if (data.hasOwnProperty('allowForex')) {
                obj['allowForex'] = ApiClient.convertToType(data['allowForex'], 'boolean');
            }
            if (data.hasOwnProperty('isTwoFactorEnabled')) {
                obj['isTwoFactorEnabled'] = ApiClient.convertToType(data['isTwoFactorEnabled'], 'boolean');
            }
            if (data.hasOwnProperty('isNewUser')) {
                obj['isNewUser'] = ApiClient.convertToType(data['isNewUser'], 'boolean');
            }
        }
        return obj;
    }
}




