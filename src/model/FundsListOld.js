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
import FundDetailsOld from './FundDetailsOld';





/**
 *
 * @interface FundsListOld
 */

/**
 *
 * @name FundsListOld#funds
 * @type {Array<FundDetailsOld>}
 */
/**
 *
 * @name FundsListOld#total
 * @type {Number}
 */





export default class FundsListOld {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundsListOld();

            
            
            

            if (data.hasOwnProperty('funds')) {
                obj['funds'] = ApiClient.convertToType(data['funds'], [FundDetailsOld]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    funds = undefined;
    total = undefined;








}





