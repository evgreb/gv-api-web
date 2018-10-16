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
import FundAssetInfo from './FundAssetInfo';





/**
* The FundAssetsListInfo model module.
* @module model/FundAssetsListInfo
* @version v1.0
*/
export default class FundAssetsListInfo {
    /**
    * Constructs a new <code>FundAssetsListInfo</code>.
    * @alias module:model/FundAssetsListInfo
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>FundAssetsListInfo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FundAssetsListInfo} obj Optional instance to populate.
    * @return {module:model/FundAssetsListInfo} The populated <code>FundAssetsListInfo</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundAssetsListInfo();

            
            
            

            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], [FundAssetInfo]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/FundAssetInfo>} assets
    */
    assets = undefined;








}


