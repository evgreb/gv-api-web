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
 * @interface SecureAlgorithm
 */



/**
* Enum class SecureAlgorithm.
* @enum {}
* @readonly
*/
export default class SecureAlgorithm {
    
        /**
         * value: "Sha256"
         * @const
         */
        Sha256 = "Sha256";

    

    /**
    * Returns a <code>SecureAlgorithm</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SecureAlgorithm} The enum <code>SecureAlgorithm</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

