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
import RewardDetails from './RewardDetails';





/**
 *
 * @interface RewardsHistoryViewModel
 */

/**
 *
 * @name RewardsHistoryViewModel#amountTotal
 * @type {Number}
 */
/**
 *
 * @name RewardsHistoryViewModel#items
 * @type {Array<RewardDetails>}
 */
/**
 *
 * @name RewardsHistoryViewModel#total
 * @type {Number}
 */





export default class RewardsHistoryViewModel {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RewardsHistoryViewModel();

            
            
            

            if (data.hasOwnProperty('amountTotal')) {
                obj['amountTotal'] = ApiClient.convertToType(data['amountTotal'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [RewardDetails]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    amountTotal = undefined;
    items = undefined;
    total = undefined;








}





