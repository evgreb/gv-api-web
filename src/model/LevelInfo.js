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
* The LevelInfo model module.
* @module model/LevelInfo
* @version v1.0
*/
export default class LevelInfo {
    /**
    * Constructs a new <code>LevelInfo</code>.
    * @alias module:model/LevelInfo
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LevelInfo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LevelInfo} obj Optional instance to populate.
    * @return {module:model/LevelInfo} The populated <code>LevelInfo</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LevelInfo();

            
            
            

            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'Number');
            }
            if (data.hasOwnProperty('investmentLimit')) {
                obj['investmentLimit'] = ApiClient.convertToType(data['investmentLimit'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Number} level
    */
    level = undefined;
    /**
    * @member {Number} investmentLimit
    */
    investmentLimit = undefined;








}


