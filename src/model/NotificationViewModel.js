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
* The NotificationViewModel model module.
* @module model/NotificationViewModel
* @version v1.0
*/
export default class NotificationViewModel {
    /**
    * Constructs a new <code>NotificationViewModel</code>.
    * @alias module:model/NotificationViewModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>NotificationViewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NotificationViewModel} obj Optional instance to populate.
    * @return {module:model/NotificationViewModel} The populated <code>NotificationViewModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationViewModel();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('programId')) {
                obj['programId'] = ApiClient.convertToType(data['programId'], 'String');
            }
            if (data.hasOwnProperty('managerId')) {
                obj['managerId'] = ApiClient.convertToType(data['managerId'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} text
    */
    text = undefined;
    /**
    * @member {Date} date
    */
    date = undefined;
    /**
    * @member {module:model/NotificationViewModel.TypeEnum} type
    */
    type = undefined;
    /**
    * @member {String} programId
    */
    programId = undefined;
    /**
    * @member {String} managerId
    */
    managerId = undefined;
    /**
    * @member {String} logo
    */
    logo = undefined;






    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
    
        /**
         * value: "PlatformNewsAndUpdates"
         * @const
         */
        "PlatformNewsAndUpdates": "PlatformNewsAndUpdates",
    
        /**
         * value: "PlatformEmergency"
         * @const
         */
        "PlatformEmergency": "PlatformEmergency",
    
        /**
         * value: "PlatformOther"
         * @const
         */
        "PlatformOther": "PlatformOther",
    
        /**
         * value: "ProfileUpdated"
         * @const
         */
        "ProfileUpdated": "ProfileUpdated",
    
        /**
         * value: "ProfilePwdUpdated"
         * @const
         */
        "ProfilePwdUpdated": "ProfilePwdUpdated",
    
        /**
         * value: "ProfileVerification"
         * @const
         */
        "ProfileVerification": "ProfileVerification",
    
        /**
         * value: "Profile2FA"
         * @const
         */
        "Profile2FA": "Profile2FA",
    
        /**
         * value: "ProfileSecurity"
         * @const
         */
        "ProfileSecurity": "ProfileSecurity",
    
        /**
         * value: "ProgramNewsAndUpdates"
         * @const
         */
        "ProgramNewsAndUpdates": "ProgramNewsAndUpdates",
    
        /**
         * value: "ProgramEndOfPeriod"
         * @const
         */
        "ProgramEndOfPeriod": "ProgramEndOfPeriod",
    
        /**
         * value: "ProgramCondition"
         * @const
         */
        "ProgramCondition": "ProgramCondition",
    
        /**
         * value: "ManagerNewProgram"
         * @const
         */
        "ManagerNewProgram": "ManagerNewProgram"    
    };



}


