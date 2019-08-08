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
import ManagerProfile from './ManagerProfile';





/**
 *
 * @interface ManagersList
 */

/**
 *
 * @name ManagersList#managers
 * @type {Array<ManagerProfile>}
 */
/**
 *
 * @name ManagersList#total
 * @type {Number}
 */





export default class ManagersList {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ManagersList();

            
            
            

            if (data.hasOwnProperty('managers')) {
                obj['managers'] = ApiClient.convertToType(data['managers'], [ManagerProfile]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    managers = undefined;
    total = undefined;








}





