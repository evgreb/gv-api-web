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
import PlatformAsset from './PlatformAsset';





/**
 *
 * @interface FundFiltersOld
 */

/**
 *
 * @name FundFiltersOld#assets
 * @type {Array<PlatformAsset>}
 */





export default class FundFiltersOld {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundFiltersOld();

            
            
            

            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], [PlatformAsset]);
            }
        }
        return obj;
    }

    assets = undefined;








}





