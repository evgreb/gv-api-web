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
import { FundNotificationSettingList } from './fundNotificationSettingList';
import { ManagerNotificationSettingList } from './managerNotificationSettingList';
import { NotificationSettingViewModel } from './notificationSettingViewModel';
import { ProgramNotificationSettingList } from './programNotificationSettingList';

import ApiClient from "../ApiClient";

export class NotificationSettingList { 
    public 'settingsGeneral'?: Array<NotificationSettingViewModel>;
    public 'settingsProgram'?: Array<ProgramNotificationSettingList>;
    public 'settingsFund'?: Array<FundNotificationSettingList>;
    public 'settingsManager'?: Array<ManagerNotificationSettingList>;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: NotificationSettingList = new NotificationSettingList()): NotificationSettingList {
        if (data) {
            if (data.hasOwnProperty('settingsGeneral')) {
                obj['settingsGeneral'] = ApiClient.convertToType(data['settingsGeneral'], [NotificationSettingViewModel]);
            }
            if (data.hasOwnProperty('settingsProgram')) {
                obj['settingsProgram'] = ApiClient.convertToType(data['settingsProgram'], [ProgramNotificationSettingList]);
            }
            if (data.hasOwnProperty('settingsFund')) {
                obj['settingsFund'] = ApiClient.convertToType(data['settingsFund'], [FundNotificationSettingList]);
            }
            if (data.hasOwnProperty('settingsManager')) {
                obj['settingsManager'] = ApiClient.convertToType(data['settingsManager'], [ManagerNotificationSettingList]);
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache

