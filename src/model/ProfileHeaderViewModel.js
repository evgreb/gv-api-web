/**
 * Core API v2
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import WalletViewModel from './WalletViewModel';





/**
* The ProfileHeaderViewModel model module.
* @module model/ProfileHeaderViewModel
* @version v2.0
*/
export default class ProfileHeaderViewModel {
    /**
    * Constructs a new <code>ProfileHeaderViewModel</code>.
    * @alias module:model/ProfileHeaderViewModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ProfileHeaderViewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProfileHeaderViewModel} obj Optional instance to populate.
    * @return {module:model/ProfileHeaderViewModel} The populated <code>ProfileHeaderViewModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProfileHeaderViewModel();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
            }
            if (data.hasOwnProperty('wallets')) {
                obj['wallets'] = ApiClient.convertToType(data['wallets'], [WalletViewModel]);
            }
            if (data.hasOwnProperty('hasNotifications')) {
                obj['hasNotifications'] = ApiClient.convertToType(data['hasNotifications'], 'Boolean');
            }
            if (data.hasOwnProperty('favoritesCount')) {
                obj['favoritesCount'] = ApiClient.convertToType(data['favoritesCount'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} avatar
    */
    avatar = undefined;
    /**
    * @member {Array.<module:model/WalletViewModel>} wallets
    */
    wallets = undefined;
    /**
    * @member {Boolean} hasNotifications
    */
    hasNotifications = undefined;
    /**
    * @member {Number} favoritesCount
    */
    favoritesCount = undefined;








}


