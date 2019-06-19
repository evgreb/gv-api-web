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
 * @interface ProfileHeaderViewModel
 */

/**
 *
 * @name ProfileHeaderViewModel#id
 * @type {String}
 */
/**
 *
 * @name ProfileHeaderViewModel#name
 * @type {String}
 */
/**
 *
 * @name ProfileHeaderViewModel#email
 * @type {String}
 */
/**
 *
 * @name ProfileHeaderViewModel#avatar
 * @type {String}
 */
/**
 *
 * @name ProfileHeaderViewModel#userType
 * @type ProfileHeaderViewModelUserTypeEnum
 */
/**
 *
 * @name ProfileHeaderViewModel#notificationsCount
 * @type {Number}
 */
/**
 *
 * @name ProfileHeaderViewModel#favoritesCount
 * @type {Number}
 */
/**
 *
 * @name ProfileHeaderViewModel#kycConfirmed
 * @type {Boolean}
 */
/**
 *
 * @name ProfileHeaderViewModel#allowForex
 * @type {Boolean}
 */
/**
 *
 * @name ProfileHeaderViewModel#isTwoFactorEnabled
 * @type {Boolean}
 */
/**
 *
 * @name ProfileHeaderViewModel#isNewUser
 * @type {Boolean}
 */
/**
 *
 * @name ProfileHeaderViewModel#totalBalanceGvt
 * @type {Number}
 */
/**
 *
 * @name ProfileHeaderViewModel#investedGvt
 * @type {Number}
 */
/**
 *
 * @name ProfileHeaderViewModel#availableGvt
 * @type {Number}
 */
/**
 *
 * @name ProfileHeaderViewModel#totalBalance
 * @type {Number}
 */
/**
 *
 * @name ProfileHeaderViewModel#invested
 * @type {Number}
 */
/**
 *
 * @name ProfileHeaderViewModel#available
 * @type {Number}
 */
/**
 *
 * @name ProfileHeaderViewModel#pending
 * @type {Number}
 */





export default class ProfileHeaderViewModel {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProfileHeaderViewModel();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
            }
            if (data.hasOwnProperty('userType')) {
                obj['userType'] = ApiClient.convertToType(data['userType'], 'String');
            }
            if (data.hasOwnProperty('notificationsCount')) {
                obj['notificationsCount'] = ApiClient.convertToType(data['notificationsCount'], 'Number');
            }
            if (data.hasOwnProperty('favoritesCount')) {
                obj['favoritesCount'] = ApiClient.convertToType(data['favoritesCount'], 'Number');
            }
            if (data.hasOwnProperty('kycConfirmed')) {
                obj['kycConfirmed'] = ApiClient.convertToType(data['kycConfirmed'], 'Boolean');
            }
            if (data.hasOwnProperty('allowForex')) {
                obj['allowForex'] = ApiClient.convertToType(data['allowForex'], 'Boolean');
            }
            if (data.hasOwnProperty('isTwoFactorEnabled')) {
                obj['isTwoFactorEnabled'] = ApiClient.convertToType(data['isTwoFactorEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('isNewUser')) {
                obj['isNewUser'] = ApiClient.convertToType(data['isNewUser'], 'Boolean');
            }
            if (data.hasOwnProperty('totalBalanceGvt')) {
                obj['totalBalanceGvt'] = ApiClient.convertToType(data['totalBalanceGvt'], 'Number');
            }
            if (data.hasOwnProperty('investedGvt')) {
                obj['investedGvt'] = ApiClient.convertToType(data['investedGvt'], 'Number');
            }
            if (data.hasOwnProperty('availableGvt')) {
                obj['availableGvt'] = ApiClient.convertToType(data['availableGvt'], 'Number');
            }
            if (data.hasOwnProperty('totalBalance')) {
                obj['totalBalance'] = ApiClient.convertToType(data['totalBalance'], 'Number');
            }
            if (data.hasOwnProperty('invested')) {
                obj['invested'] = ApiClient.convertToType(data['invested'], 'Number');
            }
            if (data.hasOwnProperty('available')) {
                obj['available'] = ApiClient.convertToType(data['available'], 'Number');
            }
            if (data.hasOwnProperty('pending')) {
                obj['pending'] = ApiClient.convertToType(data['pending'], 'Number');
            }
        }
        return obj;
    }

    id = undefined;
    name = undefined;
    email = undefined;
    avatar = undefined;
    userType = undefined;
    notificationsCount = undefined;
    favoritesCount = undefined;
    kycConfirmed = undefined;
    allowForex = undefined;
    isTwoFactorEnabled = undefined;
    isNewUser = undefined;
    totalBalanceGvt = undefined;
    investedGvt = undefined;
    availableGvt = undefined;
    totalBalance = undefined;
    invested = undefined;
    available = undefined;
    pending = undefined;






    static UserTypeEnum = {
    
        "Investor": "Investor",
    
        "Manager": "Manager"    
    };



}




/**
 * @typedef ProfileHeaderViewModelUserTypeEnum 
 * @type {("Investor"|"Manager")}
 */



