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
 *
 */


import ApiClient from '../ApiClient';
import FundNotificationSettingList from './FundNotificationSettingList';
import ManagerNotificationSettingList from './ManagerNotificationSettingList';
import NotificationSettingViewModel from './NotificationSettingViewModel';
import ProgramNotificationSettingList from './ProgramNotificationSettingList';





/**
 *
 * @interface NotificationSettingList
 */

/**
 *
 * @name NotificationSettingList#settingsGeneral
 * @type {Array<NotificationSettingViewModel>}
 */
/**
 *
 * @name NotificationSettingList#settingsProgram
 * @type {Array<ProgramNotificationSettingList>}
 */
/**
 *
 * @name NotificationSettingList#settingsFund
 * @type {Array<FundNotificationSettingList>}
 */
/**
 *
 * @name NotificationSettingList#settingsManager
 * @type {Array<ManagerNotificationSettingList>}
 */





export default class NotificationSettingList {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationSettingList();

            
            
            

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

    settingsGeneral = undefined;
    settingsProgram = undefined;
    settingsFund = undefined;
    settingsManager = undefined;








}





