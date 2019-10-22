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
 * @interface AssetInvestmentStatus
 */



/**
* Enum class AssetInvestmentStatus.
* @enum {}
* @readonly
*/
export default class AssetInvestmentStatus {
    
        /**
         * value: "Pending"
         * @const
         */
        Pending = "Pending";

    
        /**
         * value: "Active"
         * @const
         */
        Active = "Active";

    
        /**
         * value: "Investing"
         * @const
         */
        Investing = "Investing";

    
        /**
         * value: "Withdrawing"
         * @const
         */
        Withdrawing = "Withdrawing";

    
        /**
         * value: "Ended"
         * @const
         */
        Ended = "Ended";

    

    /**
    * Returns a <code>AssetInvestmentStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/AssetInvestmentStatus} The enum <code>AssetInvestmentStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}


