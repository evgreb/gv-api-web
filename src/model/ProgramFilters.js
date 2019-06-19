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
import AssetEvent from './AssetEvent';
import ProgramTag from './ProgramTag';





/**
 *
 * @interface ProgramFilters
 */

/**
 *
 * @name ProgramFilters#programTags
 * @type {Array<ProgramTag>}
 */
/**
 *
 * @name ProgramFilters#actionType
 * @type {Array<String>}
 */
/**
 *
 * @name ProgramFilters#customNotificationType
 * @type {Array<String>}
 */
/**
 *
 * @name ProgramFilters#managerNotificationType
 * @type {AssetEvent}
 */
/**
 *
 * @name ProgramFilters#investorNotificationType
 * @type {AssetEvent}
 */





export default class ProgramFilters {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramFilters();

            
            
            

            if (data.hasOwnProperty('programTags')) {
                obj['programTags'] = ApiClient.convertToType(data['programTags'], [ProgramTag]);
            }
            if (data.hasOwnProperty('actionType')) {
                obj['actionType'] = ApiClient.convertToType(data['actionType'], ['String']);
            }
            if (data.hasOwnProperty('customNotificationType')) {
                obj['customNotificationType'] = ApiClient.convertToType(data['customNotificationType'], ['String']);
            }
            if (data.hasOwnProperty('managerNotificationType')) {
                obj['managerNotificationType'] = AssetEvent.constructFromObject(data['managerNotificationType']);
            }
            if (data.hasOwnProperty('investorNotificationType')) {
                obj['investorNotificationType'] = AssetEvent.constructFromObject(data['investorNotificationType']);
            }
        }
        return obj;
    }

    programTags = undefined;
    actionType = undefined;
    customNotificationType = undefined;
    managerNotificationType = undefined;
    investorNotificationType = undefined;








}






