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
 * @interface FundWithdrawInfo
 */

/**
 *
 * @name FundWithdrawInfo#exitFee
 * @type {Number}
 */
/**
 *
 * @name FundWithdrawInfo#title
 * @type {String}
 */
/**
 *
 * @name FundWithdrawInfo#availableToWithdraw
 * @type {Number}
 */
/**
 *
 * @name FundWithdrawInfo#rate
 * @type {Number}
 */





export default class FundWithdrawInfo {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundWithdrawInfo();

            
            
            

            if (data.hasOwnProperty('exitFee')) {
                obj['exitFee'] = ApiClient.convertToType(data['exitFee'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('availableToWithdraw')) {
                obj['availableToWithdraw'] = ApiClient.convertToType(data['availableToWithdraw'], 'Number');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
        }
        return obj;
    }

    exitFee = undefined;
    title = undefined;
    availableToWithdraw = undefined;
    rate = undefined;








}





