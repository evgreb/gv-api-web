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
* The ManagerSimpleProgram model module.
* @module model/ManagerSimpleProgram
* @version v1.0
*/
export default class ManagerSimpleProgram {
    /**
    * Constructs a new <code>ManagerSimpleProgram</code>.
    * @alias module:model/ManagerSimpleProgram
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ManagerSimpleProgram</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ManagerSimpleProgram} obj Optional instance to populate.
    * @return {module:model/ManagerSimpleProgram} The populated <code>ManagerSimpleProgram</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ManagerSimpleProgram();

            
            
            

            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'Number');
            }
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

    /**
    * @member {Number} level
    */
    level = undefined;
    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} title
    */
    title = undefined;
    /**
    * @member {String} color
    */
    color = undefined;
    /**
    * @member {String} logo
    */
    logo = undefined;
    /**
    * @member {String} url
    */
    url = undefined;








}


