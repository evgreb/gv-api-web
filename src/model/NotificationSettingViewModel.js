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





/**
 *
 * @interface NotificationSettingViewModel
 */

/**
 *
 * @name NotificationSettingViewModel#id
 * @type {String}
 */
/**
 *
 * @name NotificationSettingViewModel#isEnabled
 * @type {Boolean}
 */
/**
 *
 * @name NotificationSettingViewModel#assetId
 * @type {String}
 */
/**
 *
 * @name NotificationSettingViewModel#managerId
 * @type {String}
 */
/**
 *
 * @name NotificationSettingViewModel#type
 * @type NotificationSettingViewModelTypeEnum
 */
/**
 *
 * @name NotificationSettingViewModel#conditionType
 * @type NotificationSettingViewModelConditionTypeEnum
 */
/**
 *
 * @name NotificationSettingViewModel#conditionAmount
 * @type {Number}
 */





export default class NotificationSettingViewModel {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationSettingViewModel();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('isEnabled')) {
                obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('assetId')) {
                obj['assetId'] = ApiClient.convertToType(data['assetId'], 'String');
            }
            if (data.hasOwnProperty('managerId')) {
                obj['managerId'] = ApiClient.convertToType(data['managerId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('conditionType')) {
                obj['conditionType'] = ApiClient.convertToType(data['conditionType'], 'String');
            }
            if (data.hasOwnProperty('conditionAmount')) {
                obj['conditionAmount'] = ApiClient.convertToType(data['conditionAmount'], 'Number');
            }
        }
        return obj;
    }

    id = undefined;
    isEnabled = undefined;
    assetId = undefined;
    managerId = undefined;
    type = undefined;
    conditionType = undefined;
    conditionAmount = undefined;






    static TypeEnum = {
    
        "PlatformNewsAndUpdates": "PlatformNewsAndUpdates",
    
        "PlatformEmergency": "PlatformEmergency",
    
        "PlatformOther": "PlatformOther",
    
        "ProfileUpdated": "ProfileUpdated",
    
        "ProfilePwdUpdated": "ProfilePwdUpdated",
    
        "ProfileVerification": "ProfileVerification",
    
        "Profile2FA": "Profile2FA",
    
        "ProfileSecurity": "ProfileSecurity",
    
        "TradingAccountPwdUpdated": "TradingAccountPwdUpdated",
    
        "ProgramNewsAndUpdates": "ProgramNewsAndUpdates",
    
        "ProgramEndOfPeriod": "ProgramEndOfPeriod",
    
        "ProgramCondition": "ProgramCondition",
    
        "FundNewsAndUpdates": "FundNewsAndUpdates",
    
        "FundEndOfPeriod": "FundEndOfPeriod",
    
        "FundRebalancing": "FundRebalancing",
    
        "ManagerNewProgram": "ManagerNewProgram",
    
        "Signals": "Signals"    
    };

    static ConditionTypeEnum = {
    
        "Empty": "Empty",
    
        "Profit": "Profit",
    
        "Level": "Level",
    
        "AvailableToInvest": "AvailableToInvest"    
    };



}




/**
 * @typedef NotificationSettingViewModelTypeEnum 
 * @type {("PlatformNewsAndUpdates"|"PlatformEmergency"|"PlatformOther"|"ProfileUpdated"|"ProfilePwdUpdated"|"ProfileVerification"|"Profile2FA"|"ProfileSecurity"|"TradingAccountPwdUpdated"|"ProgramNewsAndUpdates"|"ProgramEndOfPeriod"|"ProgramCondition"|"FundNewsAndUpdates"|"FundEndOfPeriod"|"FundRebalancing"|"ManagerNewProgram"|"Signals")}
 */

/**
 * @typedef NotificationSettingViewModelConditionTypeEnum 
 * @type {("Empty"|"Profit"|"Level"|"AvailableToInvest")}
 */



