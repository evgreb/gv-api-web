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
 * @interface FundAssetInfo
 */

/**
 *
 * @name FundAssetInfo#asset
 * @type {String}
 */
/**
 *
 * @name FundAssetInfo#symbol
 * @type {String}
 */
/**
 *
 * @name FundAssetInfo#icon
 * @type {String}
 */
/**
 *
 * @name FundAssetInfo#target
 * @type {Number}
 */
/**
 *
 * @name FundAssetInfo#current
 * @type {Number}
 */





export default class FundAssetInfo {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundAssetInfo();

            
            
            

            if (data.hasOwnProperty('asset')) {
                obj['asset'] = ApiClient.convertToType(data['asset'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'Number');
            }
            if (data.hasOwnProperty('current')) {
                obj['current'] = ApiClient.convertToType(data['current'], 'Number');
            }
        }
        return obj;
    }

    asset = undefined;
    symbol = undefined;
    icon = undefined;
    target = undefined;
    current = undefined;








}






