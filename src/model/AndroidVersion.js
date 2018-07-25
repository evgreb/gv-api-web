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





/**
* The AndroidVersion model module.
* @module model/AndroidVersion
* @version v2.0
*/
export default class AndroidVersion {
    /**
    * Constructs a new <code>AndroidVersion</code>.
    * @alias module:model/AndroidVersion
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>AndroidVersion</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AndroidVersion} obj Optional instance to populate.
    * @return {module:model/AndroidVersion} The populated <code>AndroidVersion</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AndroidVersion();

            
            
            

            if (data.hasOwnProperty('versionCode')) {
                obj['versionCode'] = ApiClient.convertToType(data['versionCode'], 'String');
            }
            if (data.hasOwnProperty('versionName')) {
                obj['versionName'] = ApiClient.convertToType(data['versionName'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} versionCode
    */
    versionCode = undefined;
    /**
    * @member {String} versionName
    */
    versionName = undefined;








}


