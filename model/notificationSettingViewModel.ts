/**
 * Core API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { NotificationSettingConditionType } from './notificationSettingConditionType';
import { NotificationType } from './notificationType';

import ApiClient from "../ApiClient";

export class NotificationSettingViewModel { 
    public 'id'?: string;
    public 'isEnabled'?: boolean;
    public 'assetId'?: string;
    public 'managerId'?: string;
    public 'type'?: NotificationType;
    public 'conditionType'?: NotificationSettingConditionType;
    public 'conditionAmount'?: number;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: NotificationSettingViewModel = new NotificationSettingViewModel()): NotificationSettingViewModel {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('isEnabled')) {
                obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'boolean');
            }
            if (data.hasOwnProperty('assetId')) {
                obj['assetId'] = ApiClient.convertToType(data['assetId'], 'string');
            }
            if (data.hasOwnProperty('managerId')) {
                obj['managerId'] = ApiClient.convertToType(data['managerId'], 'string');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = NotificationType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('conditionType')) {
                obj['conditionType'] = NotificationSettingConditionType.constructFromObject(data['conditionType']);
            }
            if (data.hasOwnProperty('conditionAmount')) {
                obj['conditionAmount'] = ApiClient.convertToType(data['conditionAmount'], 'number');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


