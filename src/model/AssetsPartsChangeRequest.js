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
import FundAssetPart from './FundAssetPart';





/**
* The AssetsPartsChangeRequest model module.
* @module model/AssetsPartsChangeRequest
* @version v1.0
*/
export default class AssetsPartsChangeRequest {
    /**
    * Constructs a new <code>AssetsPartsChangeRequest</code>.
    * @alias module:model/AssetsPartsChangeRequest
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>AssetsPartsChangeRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AssetsPartsChangeRequest} obj Optional instance to populate.
    * @return {module:model/AssetsPartsChangeRequest} The populated <code>AssetsPartsChangeRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssetsPartsChangeRequest();

            
            
            

            if (data.hasOwnProperty('assetsParts')) {
                obj['assetsParts'] = ApiClient.convertToType(data['assetsParts'], [FundAssetPart]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/FundAssetPart>} assetsParts
    */
    assetsParts = undefined;








}


