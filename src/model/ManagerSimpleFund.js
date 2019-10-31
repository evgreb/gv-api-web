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
 * @interface ManagerSimpleFund
 */

/**
 *
 * @name ManagerSimpleFund#id
 * @type {String}
 */
/**
 *
 * @name ManagerSimpleFund#title
 * @type {String}
 */
/**
 *
 * @name ManagerSimpleFund#color
 * @type {String}
 */
/**
 *
 * @name ManagerSimpleFund#logo
 * @type {String}
 */
/**
 *
 * @name ManagerSimpleFund#url
 * @type {String}
 */





export default class ManagerSimpleFund {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ManagerSimpleFund();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    id = undefined;
    title = undefined;
    color = undefined;
    logo = undefined;
    url = undefined;








}





